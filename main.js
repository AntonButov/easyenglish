(function () {
  "use strict";

  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function thanksPageUrl() {
    try {
      return new URL("thanks.html", window.location.href).href;
    } catch (e) {
      return "thanks.html";
    }
  }

  /* Formspree: полный URL для редиректа при обычной отправке (без fetch) */
  var nextInput = document.querySelector('.contact-form input[name="_next"]');
  if (nextInput && window.location.protocol !== "file:") {
    nextInput.value = thanksPageUrl();
  }

  /* Как у обычной формы: x-www-form-urlencoded (не multipart). Иначе у Formspree в инбоксе часто ломается колонка phone. */
  function formToUrlEncodedBody(form) {
    var params = new URLSearchParams();
    var elements = form.elements;
    var i;
    var el;
    var type;
    for (i = 0; i < elements.length; i++) {
      el = elements[i];
      if (!el.name || el.disabled) {
        continue;
      }
      type = (el.type || "").toLowerCase();
      if (type === "submit" || type === "button") {
        continue;
      }
      if (type === "checkbox" || type === "radio") {
        if (el.checked) {
          params.append(el.name, el.value);
        }
        continue;
      }
      if (type === "file") {
        continue;
      }
      params.append(el.name, el.value);
    }
    return params.toString();
  }

  /* Formspree JSON API: надёжнее, чем полагаться на серверный редирект по _next */
  var contactForm = document.querySelector(".contact-form");
  var statusEl = document.getElementById("contact-form-status");
  if (
    contactForm &&
    typeof window.fetch === "function" &&
    window.location.protocol !== "file:"
  ) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (nextInput) {
        nextInput.value = thanksPageUrl();
      }

      var btn = contactForm.querySelector('button[type="submit"]');
      var originalBtnText = btn ? btn.textContent : "";

      if (statusEl) {
        statusEl.hidden = true;
        statusEl.textContent = "";
      }
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Отправка…";
      }

      var action = contactForm.getAttribute("action");
      var body = formToUrlEncodedBody(contactForm);

      window
        .fetch(action, {
          method: "POST",
          body: body,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
        })
        .then(function (response) {
          if (response.ok) {
            window.location.href = thanksPageUrl();
            return;
          }
          return response.text().then(function (text) {
            var data = {};
            try {
              data = text ? JSON.parse(text) : {};
            } catch (ignore) {
              /* ответ не JSON (например страница ошибки) */
            }
            var msg = "Не удалось отправить заявку.";
            if (data && data.error) {
              msg =
                typeof data.error === "string"
                  ? data.error
                  : Array.isArray(data.error)
                  ? data.error.join(" ")
                  : msg;
            } else if (data && data.errors) {
              var parts = [];
              Object.keys(data.errors).forEach(function (key) {
                var v = data.errors[key];
                if (Array.isArray(v)) {
                  parts.push(v.join(" "));
                } else if (typeof v === "string") {
                  parts.push(v);
                }
              });
              if (parts.length) {
                msg = parts.join(" ");
              }
            } else if (response.status === 404) {
              msg =
                "Форма не найдена на Formspree — проверьте ID формы в панели Formspree.";
            } else if (response.status === 403 || response.status === 401) {
              msg =
                "Formspree отклонил запрос: подтвердите email формы или проверьте лимиты в панели.";
            }
            throw new Error(msg);
          });
        })
        .catch(function (err) {
          if (btn) {
            btn.disabled = false;
            btn.textContent = originalBtnText;
          }
          if (statusEl) {
            statusEl.hidden = false;
            statusEl.textContent =
              err && err.message
                ? err.message
                : "Проверьте интернет или напишите в Telegram — форма временно недоступна.";
          }
        });
    });
  }
})();

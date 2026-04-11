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

  /* Formspree: при data-recaptcha-site-key (reCAPTCHA v3) — fetch + g-recaptcha-response.
     Без ключа — обычный POST (нужно при включённой капче в Formspree без своих ключей). */
  var contactForm = document.querySelector(".contact-form");
  var statusEl = document.getElementById("contact-form-status");
  var recaptchaSiteKey =
    contactForm &&
    contactForm.getAttribute("data-recaptcha-site-key") &&
    contactForm.getAttribute("data-recaptcha-site-key").trim();

  function loadRecaptchaScript(siteKey) {
    return new Promise(function (resolve, reject) {
      if (window.grecaptcha && typeof window.grecaptcha.execute === "function") {
        resolve();
        return;
      }
      var src =
        "https://www.google.com/recaptcha/api.js?render=" +
        encodeURIComponent(siteKey);
      var existing = document.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]');
      if (existing) {
        if (existing.getAttribute("src") === src) {
          existing.addEventListener("load", function onLoad() {
            existing.removeEventListener("load", onLoad);
            resolve();
          });
          existing.addEventListener("error", function onErr() {
            existing.removeEventListener("error", onErr);
            reject(new Error("recaptcha-load"));
          });
          return;
        }
      }
      var s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = function () {
        resolve();
      };
      s.onerror = function () {
        reject(new Error("recaptcha-load"));
      };
      document.head.appendChild(s);
    });
  }

  function executeRecaptchaV3(siteKey) {
    return new Promise(function (resolve, reject) {
      window.grecaptcha.ready(function () {
        window.grecaptcha
          .execute(siteKey, { action: "submit" })
          .then(resolve)
          .catch(reject);
      });
    });
  }

  function submitFormspreeAjax(fd, btn, originalBtnText) {
    var action = contactForm.getAttribute("action");
    return window
      .fetch(action, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
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
            err && err.message === "recaptcha-load"
              ? "Не удалось загрузить reCAPTCHA (проверьте ключ v3 и блокировщики)."
              : err && err.message
              ? err.message
              : "Проверьте интернет или напишите в Telegram — форма временно недоступна.";
        }
      });
  }

  if (
    contactForm &&
    typeof window.fetch === "function" &&
    window.location.protocol !== "file:" &&
    recaptchaSiteKey
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

      var fd = new FormData(contactForm);

      loadRecaptchaScript(recaptchaSiteKey)
        .then(function () {
          return executeRecaptchaV3(recaptchaSiteKey);
        })
        .then(function (token) {
          fd.set("g-recaptcha-response", token);
          return submitFormspreeAjax(fd, btn, originalBtnText);
        })
        .catch(function (err) {
          if (btn) {
            btn.disabled = false;
            btn.textContent = originalBtnText;
          }
          if (statusEl) {
            statusEl.hidden = false;
            statusEl.textContent =
              err && err.message === "recaptcha-load"
                ? "Не удалось загрузить reCAPTCHA (проверьте ключ v3 и блокировщики)."
                : "Проверка reCAPTCHA не сработала. Обновите страницу и попробуйте снова.";
          }
        });
    });
  }
})();

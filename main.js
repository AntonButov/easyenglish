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

  var contactForm = document.querySelector(".contact-form");
  var statusEl = document.getElementById("contact-form-status");
  var apiUrl =
    contactForm &&
    contactForm.getAttribute("data-telegram-endpoint") &&
    contactForm.getAttribute("data-telegram-endpoint").trim();

  if (contactForm) {
    var hpWrap = contactForm.querySelector(".form-honeypot");
    var hp = document.createElement("input");
    hp.type = "text";
    hp.name = "_gotcha";
    hp.id = "form-hp-trap";
    hp.setAttribute("tabindex", "-1");
    hp.setAttribute("autocomplete", "off");
    hp.setAttribute("autocorrect", "off");
    hp.setAttribute("autocapitalize", "off");
    hp.setAttribute("spellcheck", "false");
    hp.setAttribute("data-lpignore", "true");
    hp.setAttribute("data-1p-ignore", "true");
    hp.setAttribute("data-bwignore", "true");
    hp.value = "";
    (hpWrap || contactForm).appendChild(hp);
    contactForm.addEventListener("focusin", function (e) {
      if (e.target !== hp) {
        hp.value = "";
      }
    });
  }

  function showFormError(btn, originalBtnText, message) {
    if (btn) {
      btn.disabled = false;
      btn.textContent = originalBtnText;
    }
    if (statusEl) {
      statusEl.hidden = false;
      statusEl.textContent = message;
    }
  }

  function submitContact(btn, originalBtnText) {
    var nameInput = contactForm.querySelector('[name="name"]');
    var phoneInput = contactForm.querySelector('[name="phone"]');
    var honeypot = contactForm.querySelector('[name="_gotcha"]');
    var hpRaw = honeypot ? honeypot.value : "";
    var body = {
      name: nameInput ? nameInput.value.trim() : "",
      phone: phoneInput ? phoneInput.value.trim() : "",
      _gotcha: typeof hpRaw === "string" ? hpRaw.trim() : "",
    };

    window
      .fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
      .then(function (response) {
        return response.text().then(function (text) {
          var data = {};
          try {
            data = text ? JSON.parse(text) : {};
          } catch (ignore) {
            /* не JSON */
          }
          if (!response.ok) {
            throw new Error((data && data.error) || "Ошибка сервера");
          }
          if (!data.ok) {
            throw new Error((data && data.error) || "Заявка не принята");
          }
          window.location.href = thanksPageUrl();
        });
      })
      .catch(function (err) {
        showFormError(
          btn,
          originalBtnText,
          (err && err.message) ||
            "Проверьте интернет или напишите в Telegram — форма недоступна."
        );
      });
  }

  if (
    contactForm &&
    typeof window.fetch === "function" &&
    window.location.protocol !== "file:" &&
    apiUrl
  ) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
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
      submitContact(btn, originalBtnText);
    });
  } else if (contactForm && window.location.protocol !== "file:" && !apiUrl) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (statusEl) {
        statusEl.hidden = false;
        statusEl.textContent =
          "Задайте в форме полный URL API в data-telegram-endpoint (HTTPS, …/api/contact). См. папку telegram-relay.";
      }
    });
  }
})();

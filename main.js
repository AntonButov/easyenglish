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

  /* Formspree: редирект после отправки — нужен полный URL (не file://) */
  var nextInput = document.querySelector('.contact-form input[name="_next"]');
  if (nextInput && window.location.protocol !== "file:") {
    try {
      nextInput.value = new URL("thanks.html", window.location.href).href;
    } catch (e) {
      /* оставляем value из разметки */
    }
  }
})();

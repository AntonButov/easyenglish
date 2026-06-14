(function (global) {
  "use strict";

  var SEGMENTS = {
    engineers: {
      id: "engineers",
      pageTitle: "Английский для инженеров | EasyEnglish",
      metaDescription:
        "Английский для инженеров — технический английский онлайн и офлайн. Преподаватель с 20-летним стажем, EasyEnglish.",
      logo: "English for Engineers",
      eyebrow: "Для инженеров, которые хотят уверенный рабочий английский",
      heroTitle:
        "Английский для инженеров: документация, встречи и переписка без стресса",
      heroLead:
        "Разбираем спецификации, письма и созвоны в реальных инженерных ситуациях — от согласования ТЗ до обсуждения узлов и сроков на стройке или в производстве.",
      heroImgAlt:
        "Налесная Оксана Владимировна, преподаватель курса английского для инженеров",
      aboutTitle: "Кому подойдёт курс",
      aboutSub:
        "Для практикующих инженеров и технических специалистов: язык под вашу отрасль, а не универсальные темы из учебника.",
      cards: [
        {
          title: "Созвоны и статусы",
          text: "Доносить решения по узлам, срокам и рискам: кратко и без «перевода в голове».",
        },
        {
          title: "Документы и стандарты",
          text: "Разбирать спецификации, регламенты, письма заказчика и поставщика на английском.",
        },
        {
          title: "Переписка по объекту",
          text: "Писать по срокам, замечаниям, поставке и согласованиям — понятно для всех сторон.",
        },
        {
          title: "Коллеги за рубежом",
          text: "Общаться с зарубежными партнёрами, аудиторами и монтажом на площадке.",
        },
      ],
      teacherLead:
        "Помогаю инженерам и техническим специалистам перейти от «школьного» английского к языку работы: короткие форматы, разговорная практика и лексика под ваши проекты и переписку.",
      programSub:
        "Подбираем темы под ваш профиль — для инженеров и IT-специалистов: от промышленного проектирования до командной разработки.",
      programCards: [
        {
          title: "Техническая лексика",
          text: "Чертежи, спецификации, узлы, оборудование, безопасность, качество и сдача документации.",
        },
        {
          title: "Разговорная практика",
          text: "Созвон с заказчиком, уточнение допусков, координация с смежными отделами, обход объекта.",
        },
        {
          title: "Онлайн или офлайн",
          text: "Удобный график; материалы остаются у вас для повторения между занятиями.",
        },
      ],
      reviews: [
        {
          text: "«Раньше боялась звонков с нашим европейским подрядчиком. После занятий спокойно обсуждаю поставки и замечания по КД — без заранее заготовленного текста.»",
          author: "Анна К.",
          role: "инженер снабжения",
        },
        {
          text: "«Разобрали реальные письма заказчика и выдержки из стандарта — сразу стало понятно, где я «рассыпаюсь» и какие клише использовать.»",
          author: "Михаил Т.",
          role: "инженер-проектировщик ОВиК",
        },
        {
          text: "«Я из IT: после занятий проще объяснять задачи англоязычной команде и читать техническую документацию без постоянного переводчика.»",
          author: "Елена С.",
          role: "IT-специалист",
        },
      ],
      formSubject: "Заявка: English for Engineers",
      footerBrand: "EasyEnglish",
      footerCopy:
        "English for Engineers. Информация на странице носит ознакомительный характер.",
    },
    architects: {
      id: "architects",
      pageTitle: "Английский для архитекторов | EasyEnglish",
      metaDescription:
        "Английский для архитекторов — онлайн-курс EasyEnglish. Английский язык для архитекторов: документация, созвоны и переписка.",
      logo: "English for Architects",
      eyebrow: "Для архитекторов, которым нужен рабочий английский",
      heroTitle:
        "Английский для архитекторов: документация, созвоны и переписка",
      heroLead:
        "Курс под запрос «английский для архитекторов»: разбираем ваши рабочие ситуации — письма, созвоны и проектную переписку, без отрыва от практики.",
      heroImgAlt:
        "Налесная Оксана Владимировна, преподаватель курса английского для архитекторов",
      aboutTitle: "Кому подойдёт курс",
      aboutSub:
        "Для практикующих архитекторов и проектировщиков — когда в поиске «английский для архитекторов» или «английский язык для архитекторов», а нужен язык работы, не учебник.",
      cards: [
        {
          title: "Созвоны",
          text: "Обсуждать проект, сроки и правки на английском — спокойно и по делу.",
        },
        {
          title: "Документация",
          text: "Читать и обсуждать проектные материалы, письма и комментарии на английском.",
        },
        {
          title: "Переписка",
          text: "Писать по объектам и согласованиям понятно для всех сторон.",
        },
        {
          title: "Коллеги и партнёры",
          text: "Общаться с зарубежными заказчиками и смежниками без «перевода в голове».",
        },
      ],
      teacherLead:
        "Помогаю архитекторам перейти от «школьного» английского к языку работы: короткие форматы, разговорная практика и лексика под ваши проекты и переписку.",
      programSub:
        "Программа под ваш профиль — от жилых и общественных зданий до проектной документации.",
      programCards: [
        {
          title: "Лексика по вашим задачам",
          text: "Термины и формулировки из ваших материалов, а не абстрактные темы учебника.",
        },
        {
          title: "Разговорная практика",
          text: "Созвоны, уточнения по проекту, ответы на замечания.",
        },
        {
          title: "Онлайн",
          text: "Удобный график; материалы остаются у вас для повторения между занятиями.",
        },
      ],
      reviews: [
        {
          text: "«Раньше избегала созвонов с иностранным заказчиком. Сейчас спокойно обсуждаю правки и сроки — без заготовленного текста.»",
          author: "Дарья Л.",
          role: "архитектор",
        },
        {
          text: "«Разобрали мои письма и фрагменты проектной документации — стало понятно, где «рассыпаюсь» и какие формулировки использовать.»",
          author: "Игорь П.",
          role: "архитектор-проектировщик",
        },
        {
          text: "«После занятий проще вести переписку и созвоны на английском по текущему объекту.»",
          author: "Мария В.",
          role: "ведущий архитектор",
        },
      ],
      formSubject: "Заявка: English for Architects",
      footerBrand: "EasyEnglish",
      footerCopy:
        "English for Architects. Информация на странице носит ознакомительный характер.",
    },
  };

  function detectSegment() {
    try {
      var params = new URLSearchParams(window.location.search);
      var explicit = (params.get("segment") || "").toLowerCase();
      if (explicit === "architects" || explicit === "engineers") {
        return explicit;
      }
      var campaign = (params.get("utm_campaign") || "").toLowerCase();
      if (campaign.indexOf("architect") !== -1) {
        return "architects";
      }
    } catch (e) {
      /* ignore */
    }
    return "engineers";
  }

  function setText(selector, text) {
    var el = document.querySelector(selector);
    if (el && text) {
      el.textContent = text;
    }
  }

  function applySegment(segmentId) {
    var data = SEGMENTS[segmentId] || SEGMENTS.engineers;
    document.documentElement.setAttribute("data-segment", data.id);

    document.title = data.pageTitle;

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", data.metaDescription);
    }

    setText(".logo", data.logo);
    setText(".hero .eyebrow", data.eyebrow);
    setText("#hero-title", data.heroTitle);
    setText(".hero .lead", data.heroLead);
    setText("#about-title", data.aboutTitle);
    setText("#about .section-sub", data.aboutSub);
    setText(".teacher-text p:last-of-type", data.teacherLead);
    setText("#program .section-sub", data.programSub);
    setText(".footer-brand", data.footerBrand);
    setText("#footer-suffix", data.footerCopy);

    var heroImg = document.querySelector(".hero-img");
    if (heroImg) {
      heroImg.alt = data.heroImgAlt;
    }

    var aboutCards = document.querySelectorAll("#about .card");
    data.cards.forEach(function (card, i) {
      if (!aboutCards[i]) return;
      var title = aboutCards[i].querySelector(".card-title");
      var p = aboutCards[i].querySelector("p");
      if (title) title.textContent = card.title;
      if (p) p.textContent = card.text;
    });

    var programCards = document.querySelectorAll("#program .card");
    data.programCards.forEach(function (card, i) {
      if (!programCards[i]) return;
      var title = programCards[i].querySelector(".card-title");
      var p = programCards[i].querySelector("p");
      if (title) title.textContent = card.title;
      if (p) p.textContent = card.text;
    });

    var reviewCards = document.querySelectorAll(".review-card");
    data.reviews.forEach(function (review, i) {
      if (!reviewCards[i]) return;
      var text = reviewCards[i].querySelector(".review-text");
      var author = reviewCards[i].querySelector(".review-author");
      var role = reviewCards[i].querySelector(".review-role");
      if (text) text.textContent = review.text;
      if (author) author.textContent = review.author;
      if (role) role.textContent = review.role;
    });

    var formSubject = document.querySelector('.contact-form input[name="_subject"]');
    if (formSubject) {
      formSubject.value = data.formSubject;
    }

    return data;
  }

  global.EasyEnglishSegments = {
    SEGMENTS: SEGMENTS,
    detectSegment: detectSegment,
    applySegment: applySegment,
  };
})(window);

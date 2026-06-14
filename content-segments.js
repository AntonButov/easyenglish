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
        "Английский для архитекторов — презентации, BIM, переписка с заказчиком и международные конкурсы. Онлайн, EasyEnglish.",
      logo: "English for Architects",
      eyebrow: "Для архитекторов и проектировщиков с международными задачами",
      heroTitle:
        "Английский для архитекторов: концепции, BIM и переговоры с заказчиком",
      heroLead:
        "Готовим презентации концепций, письма по замечаниям экспертизы, созвоны с заказчиком и подрядчиками — на языке вашей практики, а не абстрактных тем из учебника.",
      heroImgAlt:
        "Налесная Оксана Владимировна, преподаватель курса английского для архитекторов",
      aboutTitle: "Кому подойдёт курс",
      aboutSub:
        "Для архитекторов, urban-дизайнеров и BIM-координаторов: язык под проектирование, согласования и международные конкурсы.",
      cards: [
        {
          title: "Презентации и питчи",
          text: "Объяснять концепцию, материалы и посадку на английском — уверенно на review и защите.",
        },
        {
          title: "BIM и документация",
          text: "Комментарии к модели, RFIs, спецификации отделок, письма по замечаниям экспертизы.",
        },
        {
          title: "Заказчик и подрядчики",
          text: "Согласовывать сроки этапов, бюджет, изменения и ответы на замечания без «перевода в голове».",
        },
        {
          title: "Международные проекты",
          text: "Работа с зарубежным бюро, конкурсы, портфолио и переписка с партнёрами.",
        },
      ],
      teacherLead:
        "Помогаю архитекторам и проектировщикам говорить о проекте на английском: от первого эскиза до сдачи рабочей документации — с лексикой BIM, urban design и типичных переговоров с заказчиком.",
      programSub:
        "Темы под ваш профиль: жилая и коммерческая архитектура, интерьеры, мастер-план, BIM-координация.",
      programCards: [
        {
          title: "Архитектурная лексика",
          text: "Massing, facade, layout, MEP coordination, sustainability, design intent, as-built.",
        },
        {
          title: "Review и созвоны",
          text: "Design review, client feedback, clash detection, value engineering, milestone updates.",
        },
        {
          title: "Онлайн",
          text: "Удобный график; разбор ваших презентаций, писем и фрагментов проектной документации.",
        },
      ],
      reviews: [
        {
          text: "«На международном конкурсе наконец смогла устно пояснить концепцию — без заранее выученного monologue.»",
          author: "Дарья Л.",
          role: "архитектор, жилая архитектура",
        },
        {
          text: "«Разобрали мои письма заказчику и комментарии к BIM-модели — стало понятно, какие формулировки звучат профессионально.»",
          author: "Игорь П.",
          role: "BIM-координатор",
        },
        {
          text: "«После занятий спокойнее веду weekly call с лондонским бюро: сроки, RFIs и правки по фасаду.»",
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

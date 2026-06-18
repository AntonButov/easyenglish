(function (global) {
  "use strict";

  var SEGMENTS = {
    engineers: {
      id: "engineers",
      pageTitle: "Английский для инженеров | EasyEnglish",
      metaDescription:
        "Английский для инженеров — технический английский онлайн. EasyEnglish, занятия по видеосвязи.",
      logo: "English for Engineers",
      eyebrow: "Онлайн-школа · только дистанционно · для инженеров",
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
          title: "Онлайн",
          text: "Занятия по видеосвязи из любой точки; материалы остаются у вас для повторения между уроками.",
        },
      ],
      topicsTitle: "Запросы, которые уже приводят с рекламы",
      topicsSub:
        "Разбираем на занятиях — без абстрактных тем из учебника.",
      topicsCards: [
        {
          title: "CAD/CAE и рабочая документация",
          text: "Ansys, чертежи, спецификации: формулировки и переписка по реальным задачам инженера.",
        },
        {
          title: "Язык для технических специальностей",
          text: "Документация, созвоны и переписка — под запрос «английский для технических специальностей».",
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
    technical: {
      id: "technical",
      pageTitle: "Технический английский онлайн | EasyEnglish",
      metaDescription:
        "Курсы технического английского онлайн — EasyEnglish. Технический английский для работы: документация, созвоны и переписка.",
      logo: "Technical English",
      eyebrow: "Онлайн-школа · только дистанционно · технический английский",
      heroTitle:
        "Технический английский онлайн: курсы под вашу работу",
      heroLead:
        "Когда в поиске «технический английский курсы» или «как выучить технический английский» — нужен язык для документов, созвонов и переписки, а не учебник или переводчик.",
      heroImgAlt:
        "Налесная Оксана Владимировна, преподаватель курсов технического английского",
      aboutTitle: "Кому подойдут курсы",
      aboutSub:
        "Для инженеров, техспециалистов и всех, кому нужен рабочий технический английский — без абстрактных тем из школьного учебника.",
      cards: [
        {
          title: "Курсы онлайн",
          text: "Занятия по видеосвязи — под запрос «курсы технического английского онлайн» и «технический английский онлайн».",
        },
        {
          title: "Документация и стандарты",
          text: "Читать спецификации, регламенты и письма на английском — без постоянного перевода.",
        },
        {
          title: "Созвоны и статусы",
          text: "Обсуждать задачи, сроки и решения на английском — кратко и по делу.",
        },
        {
          title: "С нуля и для практики",
          text: "План «как выучить технический английский»: лексика по вашей отрасли, а не зубрёжка ради экзамена.",
        },
      ],
      teacherLead:
        "Помогаю освоить технический английский для работы: короткие форматы, разговорная практика и лексика из ваших документов и переписки.",
      programSub:
        "Программа под ваш профиль — промышленность, стройка, IT, проектирование: темы из реальных задач.",
      programCards: [
        {
          title: "Техническая лексика",
          text: "Термины, формулировки и клише из ваших материалов — спецификации, чертежи, отчёты.",
        },
        {
          title: "Разговорная практика",
          text: "Созвоны, уточнения, статусы — без «перевода в голове».",
        },
        {
          title: "Онлайн-формат",
          text: "Удобный график; материалы остаются у вас для повторения между занятиями.",
        },
      ],
      topicsTitle: "Запросы с рекламы",
      topicsSub: "Темы, по которым уже приходят с поиска — разбираем на занятиях.",
      topicsCards: [
        {
          title: "Технический английский курсы",
          text: "Структура курса под ваш уровень и задачи: документация, созвоны, переписка.",
        },
        {
          title: "Как выучить технический английский",
          text: "План с нуля: лексика по отрасли, практика на ваших материалах — без учебника ради учебника.",
        },
      ],
      reviews: [
        {
          text: "«Искала именно курсы технического английского онлайн — не общий разговорный. Здесь разбираем мои письма и документы, а не абстрактные темы.»",
          author: "Ольга М.",
          role: "инженер-конструктор",
        },
        {
          text: "«После нескольких занятий проще читать спецификации и участвовать в созвонах — без постоянной подготовки текста заранее.»",
          author: "Дмитрий К.",
          role: "технический специалист",
        },
        {
          text: "«Нужен был технический английский для работы, а не IELTS. Формат онлайн и короткие занятия — удобно совмещать с проектами.»",
          author: "Алина Р.",
          role: "инженер-проектировщик",
        },
      ],
      formSubject: "Заявка: Technical English",
      footerBrand: "EasyEnglish",
      footerCopy:
        "Technical English. Информация на странице носит ознакомительный характер.",
    },
    architects: {
      id: "architects",
      pageTitle: "Английский для архитекторов | EasyEnglish",
      metaDescription:
        "Английский для архитекторов — онлайн-курс EasyEnglish. Английский язык для архитекторов: документация, созвоны и переписка.",
      logo: "English for Architects",
      eyebrow: "Онлайн-школа · только дистанционно · для архитекторов",
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
      topicsTitle: "Запросы с рекламы",
      topicsSub: "Академический и рабочий английский в архитектуре и строительстве.",
      topicsCards: [
        {
          title: "Академический английский в архитектуре",
          text: "Проектная документация, созвоны с заказчиком, формулировки без «перевода в голове».",
        },
        {
          title: "Строительство и материалы",
          text: "Лексика по объектам, свойствам материалов и переписке на английском.",
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
      if (
        explicit === "architects" ||
        explicit === "engineers" ||
        explicit === "technical"
      ) {
        return explicit;
      }
      var campaign = (params.get("utm_campaign") || "").toLowerCase();
      if (campaign.indexOf("architect") !== -1) {
        return "architects";
      }
      if (campaign.indexOf("technical") !== -1 || campaign.indexOf("tech_english") !== -1) {
        return "technical";
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

    if (data.topicsCards) {
      setText("#topics-title", data.topicsTitle);
      setText("#topics .section-sub", data.topicsSub);
      var topicCards = document.querySelectorAll("#topics .card");
      data.topicsCards.forEach(function (card, i) {
        if (!topicCards[i]) return;
        var title = topicCards[i].querySelector(".card-title");
        var p = topicCards[i].querySelector("p");
        if (title) title.textContent = card.title;
        if (p) p.textContent = card.text;
      });
    }

    var onlineBadge = document.getElementById("online-badge");
    if (onlineBadge) {
      onlineBadge.textContent = "Только онлайн — без очных занятий";
    }

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

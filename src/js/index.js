import _ from "lodash";
const path = "./../html/includes/";

const captionWithIcon = _.template(
  require(`./../html/elements/caption-with-icon.html`).default
);

const newsItem = _.template(
  require("./../html/elements/news-item.html").default
);

const newsBlock = _.template(
  require("./../html/blocks/news-block.html").default
);

const verticalNewsBlock = _.template(
  require("./../html/blocks/vertical-news-block.html").default
);

const arrivalItem = _.template(
  require("./../html/elements/arrival-item.html").default
);

const arrivalsBlock = _.template(
  require("./../html/blocks/arrivals-block.html").default
);

const arrivalsContainer = _.template(
  require("./../html/blocks/arrivals-container.html").default
);

const infoSimpleCard = _.template(
  require("./../html/elements/info-simple-card.html").default
);

const innerElementOfInfoCard = _.template(
  require("./../html/elements/inner-element-of-info-card.html").default
);

const importantInfoBlock = _.template(
  require("./../html/blocks/important-info-block.html").default
);

//-------- Вставка блока с новостями
const newsBlockData = {
  className: "_with-caption _button", //для главного блока
  blockClassName: "_row _j-between", //для блока news__block
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: "_row _a-center",
    width: "23px",
    height: "15px",
    imgName: "news",
    text: "Важная информация"
  },
  //newsItem
  newsItem,
  newsItemData: [
    {
      className: "_row",
      date: "01.02.2019",
      time: "14:10",
      text: "Результаты распределения квот на отдых 2019"
    },
    {
      className: "_row",
      date: "01.02.2019",
      time: "14:10",
      text: "Результаты распределения квот на отдых 2019"
    },
    {
      className: "_row",
      date: "01.02.2019",
      time: "14:10",
      text: "Результаты распределения квот на отдых 2019"
    }
  ]
};

const newsContainer = document.createElement("div");
newsContainer.innerHTML = newsBlock(newsBlockData);

//const newsBlockContent = newsBlock(newsBlockData);

//-------- Вставка блока с вертикальными новостями и картинкой
const verticalNewsBlockData = {
  className: "_with-caption", //для главного блока
  blockClassName: "_row _j-between", //для блока news__block
  //img
  img: true,
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: "_row _a-center",
    width: "23px",
    height: "15px",
    imgName: "news",
    text: "Важная информация"
  },
  //newsItem
  newsItem,
  newsItemData: [
    {
      className: "_row",
      date: "01.02.2019",
      time: "14:10",
      text: "Результаты распределения квот на отдых 2019"
    },
    {
      className: "_row",
      date: "01.02.2019",
      time: "14:10",
      text: "Результаты распределения квот на отдых 2019"
    },
    {
      className: "_row",
      date: "01.02.2019",
      time: "14:10",
      text: "Результаты распределения квот на отдых 2019"
    }
  ]
};
const verticalNewsContainer = document.createElement("div");
verticalNewsContainer.innerHTML = verticalNewsBlock(verticalNewsBlockData);
//const verticalNewsBlockContent = verticalNewsBlock(verticalNewsBlockData);

//-------- Вставка блока с заездами
const arrivalsContainerData = {
  className: "", //для главного блока
  blockClassName: "_row _j-between", //для блока news__block
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: "_row _a-center",
    width: "32px",
    height: "16px",
    imgName: "car",
    text: "информация о заездах сегодня"
  },

  //arrivalsBlock
  arrivalsBlock,
  arrivalsBlockData: [
    {
      caption: "ЗАЕЗДЫ —20–27 ИЮНЯ 2019",
      arrivalItem,
      arrivalItems: [
        {
          className: "_column",
          date: "01.02.2019",
          time: "14:10",
          address: "Результаты распределения квот на отдых 2019",
          city: "адлер"
        },
        {
          className: "_column",
          date: "01.02.2019",
          time: "14:10",
          address: "Результаты распределения квот на отдых 2019",
          city: "адлер"
        }
      ]
    },
    {
      caption: "ВЫЕЗДЫ —20–27 ИЮНЯ 2019",
      arrivalItem,
      arrivalItems: [
        {
          className: "_column",
          date: "01.02.2019",
          time: "14:10",
          address: "Результаты распределения квот на отдых 2019",
          city: "адлер"
        },
        {
          className: "_column",
          date: "01.02.2019",
          time: "14:10",
          address: "Результаты распределения квот на отдых 2019",
          city: "адлер"
        }
      ]
    }
  ]
};

const arrivalsWrapper = document.createElement("div");
arrivalsWrapper.innerHTML = arrivalsContainer(arrivalsContainerData);

//------- Вставка блока с важной информацией
const importantInfoBlockData = {
  infoSimpleCard,
  infoSimpleCardsData: [
    {
      innerElementOfInfoCard,
      innerElementData: {
        caption: true,
        captionWithIcon,
        captionWithIconData: {
          className: "_column _a-center _circle-icon-border",
          imgName: "respect",
          text: "Как получить льготу"
        },
        description: false
      },
      backSide: true, //включает и выключает обратную сторону карточки при наведении
      backCaptionText: "Как получить льготу",
      backText:
        "Заявление о предоставлении услуг отдыха и оздоровления может подать родитель (иной законный представитель) или доверенное лицо на совершение действий в период проведения заявочной кампании."
    },
    {
      innerElementOfInfoCard,
      innerElementData: {
        caption: true,
        captionWithIcon,
        captionWithIconData: {
          className: "_column _a-center _circle-icon-border",
          imgName: "sun",
          text: "Квоты на отдых и оздоровление в 2019 году"
        },
        description: false
      },
      backSide: false //включает и выключает обратную сторону карточки при наведении
    },
    {
      innerElementOfInfoCard,
      innerElementData: {
        caption: true,
        captionWithIcon,
        captionWithIconData: {
          className: "_column _a-center _circle-icon-border",
          imgName: "wallet",
          text: "Порядок выплаты частичной компенсации"
        },
        description: false
      },
      backSide: false //включает и выключает обратную сторону карточки при наведении
    },
    {
      innerElementOfInfoCard,
      innerElementData: {
        caption: true,
        captionWithIcon,
        captionWithIconData: {
          className: "_column _a-center _circle-icon-border",
          imgName: "people",
          text: "Список льготных категорий"
        },
        description: false
      },
      backSide: false //включает и выключает обратную сторону карточки при наведении
    },
    {
      innerElementOfInfoCard,
      innerElementData: {
        caption: true,
        captionWithIcon,
        captionWithIconData: {
          className: "_column _a-center _circle-icon-border",
          imgName: "lodge",
          text: "Бесплатные путевки в Орленок для одаренных детей"
        },
        description: false
      },
      backSide: false //включает и выключает обратную сторону карточки при наведении
    },
    {
      innerElementOfInfoCard,
      innerElementData: {
        caption: true,
        captionWithIcon,
        captionWithIconData: {
          className: "_column _a-center _circle-icon-border",
          imgName: "blanks",
          text:
            "Постановление Правительства Москвы № 56-ПП «Об организации отдыха и оздоровления детей, находящихся в трудной жизненной ситуации» (в актуальной редакции от 18 октября 2018 г.)"
        },
        description: false
      },
      backSide: false //включает и выключает обратную сторону карточки при наведении
    }
  ]
};

const importantInfoWrapper = document.createElement("div");
importantInfoWrapper.innerHTML = importantInfoBlock(importantInfoBlockData);

//результат
//const result = newsBlockContent;

const content = document.body.querySelector(".content-container");

//content.innerHTML = result;

//content.appendChild(newsContainer);

//content.appendChild(verticalNewsContainer);

//content.appendChild(arrivalsWrapper);

//content.appendChild(importantInfoWrapper);

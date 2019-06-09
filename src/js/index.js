import _ from 'lodash';
const path = './../html/includes/';

import {
  captionWithIcon,
  newsItem,
  arrivalsBlock,
  arrivalItem,
  infoSimpleCard,
  innerElementOfInfoCard,
  infoDoubleCard,
  infoListCard,
  materialInput,
  additionalBookingBlock,
  videoReview,
  offerCardItem,
} from './common.js';

//main
import headerLayerTemplate from './layers/header.js';
import mainNewsLayerTemplate from './layers/main-news.js';
import mainFirstCompositeLayerTemplate from './layers/main-first-composite-layer.js';
import mainSecondCompositeLayerTemplate from './layers/main-second-composite-layer.js';

//social vacation
import usefulLinksLayerTemplate from './layers/useful-links.js';
import wellnessСompanyLayerTemplate from './layers/wellness-company.js';
import frequentlyQuestionsLayerTemplate from './layers/frequently-questions.js';
import recommendationsLayerTemplate from './layers/recommendations.js';

const content = document.body.querySelector('.content-container');

/* -------------------- Вставка блоков ---------------------- */

//----- DONE! Вставка блока с видеоотзывами
const videoReviewData = {
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    imgName: 'video',
    text: 'Видеоотзывы',
  },
};
const videoReviewContainer = document.createElement('div');
videoReviewContainer.innerHTML = videoReview(videoReviewData);
//content.appendChild(videoReviewContainer);

//---- DONE!Вставка блока с предложением у которого 3 состояния
const offerCardItemData = {
  className: '_state-1',
  /* caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    imgName: 'video',
    text: 'Видеоотзывы',
  }, */
};
const offerCardItemContainer = document.createElement('div');
offerCardItemContainer.innerHTML = offerCardItem(offerCardItemData);
//content.appendChild(offerCardItemContainer);

//-------- Вставка блока с новостями
const newsBlockData = {
  className: '_with-caption _button', //для главного блока
  blockClassName: '_row _j-between', //для блока news__block
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    width: '23px',
    height: '15px',
    imgName: 'news',
    text: 'Важная информация',
  },
  //newsItem
  newsItem,
  newsItemData: [
    {
      className: '_row',
      date: '01.02.2019',
      time: '14:10',
      text: 'Результаты распределения квот на отдых 2019',
    },
    {
      className: '_row',
      date: '01.02.2019',
      time: '14:10',
      text: 'Результаты распределения квот на отдых 2019',
    },
    {
      className: '_row',
      date: '01.02.2019',
      time: '14:10',
      text: 'Результаты распределения квот на отдых 2019',
    },
  ],
};

//const newsContainer = document.createElement('div');
//newsContainer.innerHTML = newsBlock(newsBlockData);

//-------- Вставка блока с вертикальными новостями и картинкой
const verticalNewsBlockData = {
  className: '_with-caption', //для главного блока
  blockClassName: '_row _j-between', //для блока news__block
  //img
  img: true,
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    width: '23px',
    height: '15px',
    imgName: 'news',
    text: 'Важная информация',
  },
  //newsItem
  newsItem,
  newsItemData: [
    {
      className: '_row',
      date: '01.02.2019',
      time: '14:10',
      text: 'Результаты распределения квот на отдых 2019',
    },
    {
      className: '_row',
      date: '01.02.2019',
      time: '14:10',
      text: 'Результаты распределения квот на отдых 2019',
    },
    {
      className: '_row',
      date: '01.02.2019',
      time: '14:10',
      text: 'Результаты распределения квот на отдых 2019',
    },
  ],
};
//const verticalNewsContainer = document.createElement('div');
//verticalNewsContainer.innerHTML = verticalNewsBlock(verticalNewsBlockData);

//-------- DONE! Вставка блока с заездами
const arrivalsContainerData = {
  className: '', //для главного блока
  blockClassName: '_row _j-between', //для блока news__block
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    width: '32px',
    height: '16px',
    imgName: 'car',
    text: 'информация о заездах сегодня',
  },

  //arrivalsBlock
  arrivalsBlock,
  arrivalsBlockData: [
    {
      caption: 'ЗАЕЗДЫ —20–27 ИЮНЯ 2019',
      arrivalItem,
      arrivalItems: [
        {
          className: '_column',
          date: '01.02.2019',
          time: '14:10',
          address: 'Результаты распределения квот на отдых 2019',
          city: 'адлер',
        },
        {
          className: '_column',
          date: '01.02.2019',
          time: '14:10',
          address: 'Результаты распределения квот на отдых 2019',
          city: 'адлер',
        },
      ],
    },
    {
      caption: 'ВЫЕЗДЫ —20–27 ИЮНЯ 2019',
      arrivalItem,
      arrivalItems: [
        {
          className: '_column',
          date: '01.02.2019',
          time: '14:10',
          address: 'Результаты распределения квот на отдых 2019',
          city: 'адлер',
        },
        {
          className: '_column',
          date: '01.02.2019',
          time: '14:10',
          address: 'Результаты распределения квот на отдых 2019',
          city: 'адлер',
        },
      ],
    },
  ],
};

//const arrivalsWrapper = document.createElement('div');
//arrivalsWrapper.innerHTML = arrivalsContainer(arrivalsContainerData);

//------- DONE! Вставка блока с важной информацией
const importantInfoBlockData = {
  infoSimpleCard,
  infoSimpleCardsData: [
    {
      innerElementOfInfoCard,
      innerElementData: {
        caption: true,
        captionWithIcon,
        captionWithIconData: {
          className: '_column _a-center _circle-icon-border',
          imgName: 'respect',
          text: 'Как получить льготу',
        },
        description: false,
      },
      backSide: true, //включает и выключает обратную сторону карточки при наведении
      backCaptionText: 'Как получить льготу',
      backText:
        'Заявление о предоставлении услуг отдыха и оздоровления может подать родитель (иной законный представитель) или доверенное лицо на совершение действий в период проведения заявочной кампании.',
    },
    {
      innerElementOfInfoCard,
      innerElementData: {
        caption: true,
        captionWithIcon,
        captionWithIconData: {
          className: '_column _a-center _circle-icon-border',
          imgName: 'sun',
          text: 'Квоты на отдых и оздоровление в 2019 году',
        },
        description: false,
      },
      backSide: false, //включает и выключает обратную сторону карточки при наведении
    },
    {
      innerElementOfInfoCard,
      innerElementData: {
        caption: true,
        captionWithIcon,
        captionWithIconData: {
          className: '_column _a-center _circle-icon-border',
          imgName: 'wallet',
          text: 'Порядок выплаты частичной компенсации',
        },
        description: false,
      },
      backSide: false, //включает и выключает обратную сторону карточки при наведении
    },
    {
      innerElementOfInfoCard,
      innerElementData: {
        caption: true,
        captionWithIcon,
        captionWithIconData: {
          className: '_column _a-center _circle-icon-border',
          imgName: 'people',
          text: 'Список льготных категорий',
        },
        description: false,
      },
      backSide: false, //включает и выключает обратную сторону карточки при наведении
    },
    {
      innerElementOfInfoCard,
      innerElementData: {
        caption: true,
        captionWithIcon,
        captionWithIconData: {
          className: '_column _a-center _circle-icon-border',
          imgName: 'lodge',
          text: 'Бесплатные путевки в Орленок для одаренных детей',
        },
        description: false,
      },
      backSide: false, //включает и выключает обратную сторону карточки при наведении
    },
    {
      innerElementOfInfoCard,
      innerElementData: {
        caption: true,
        captionWithIcon,
        captionWithIconData: {
          className: '_column _a-center _circle-icon-border',
          imgName: 'blanks',
          text:
            'Постановление Правительства Москвы № 56-ПП «Об организации отдыха и оздоровления детей, находящихся в трудной жизненной ситуации» (в актуальной редакции от 18 октября 2018 г.)',
        },
        description: false,
      },
      backSide: false, //включает и выключает обратную сторону карточки при наведении
    },
  ],
};

//const importantInfoWrapper = document.createElement('div');
//importantInfoWrapper.innerHTML = importantInfoBlock(importantInfoBlockData);

//------- DONE! Вставка блока с этапами заявочной компании
//content.innerHTML = wellnessСompanyLayerTemplate;

//------ DONE! Блок бронирования дополнительных услуг и мест
const additionalBookingBlockData = {
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_column _a-center',
    imgName: 'calendar',
    text: 'Бронирование дополнительных мест и услуг',
  },
  description: false,
  materialInput,
  materialInputData: [{ text: 'Номер путевки' }, { text: 'Фамилия заявителя' }],
};
//const additionalBookingBlockWrapper = document.createElement('div');
/* additionalBookingBlockWrapper.innerHTML = additionalBookingBlock(
  additionalBookingBlockData,
); */

//------- DONE! Блок ответа на частые вопросы
//content.innerHTML = frequentlyQuestionsLayerTemplate;

// ----- DONE! Вставка блока полезных ссылок
//content.innerHTML = usefulLinksLayerTemplate;

//------ DONE! Вставка блока рекомендаций
//content.innerHTML = recommendationsLayerTemplate;

//Вставка шапки пиздец!
//content.innerHTML = headerLayerTemplate;

//результат
//const result = newsBlockContent;

//content.innerHTML = result;

//content.appendChild(newsContainer);

//content.appendChild(verticalNewsContainer);

//content.appendChild(arrivalsWrapper);

//content.appendChild(importantInfoWrapper);

//content.appendChild(wellnessСompanyWrapper);

//content.appendChild(additionalBookingBlockWrapper);

//Сборка main страницы
const mainResult =
  headerLayerTemplate +
  mainNewsLayerTemplate +
  mainFirstCompositeLayerTemplate +
  mainSecondCompositeLayerTemplate;
content.innerHTML = mainResult;

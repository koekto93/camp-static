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

import getTemplate from './layers/header-layer.js';
//common layers
import header from './layers/header.js';
import footerTemplate from './layers/footer.js';
import mailingLayerTemplate from './layers/mailing.js';
import guaranteesTemplate from './layers/guarantees.js';
import previouslyViewedOffers from './layers/previously-viewed-offers.js';
import advertisingPointTemplate from './layers/advertising-point.js';
import offersChildHolidayCompositeTemplate from './layers/offers-child-holiday-composite-layer.js';

//main
import mainNewsLayerTemplate from './layers/main-news.js';
import mainFirstCompositeLayerTemplate from './layers/main-first-composite-layer.js';
import mainSecondCompositeLayerTemplate from './layers/main-second-composite-layer.js';
import mainAboutMosgorturLayerTemplate from './layers/main-about-mosgortur.js';
import mainLayerWithOffersTemplate from './layers/main-layer-with-offers.js';
import mainLeaderTemplate from './layers/main-leader.js';
import mainThirdCompositeLayerTemplate from './layers/main-third-composite-layer.js';
import mainCorporateServicesTemplate from './layers/main-corporate-services.js';
import mainOurCampsTemplate from './layers/main-our-camps.js';

//social vacation
import socialNewsLayerTemplate from './layers/social-news.js';
import socialFirstCompositeLayerTemplate from './layers/social-first-composite-layer.js';
import socialWellnessСompanyLayerTemplate from './layers/social-wellness-company.js';
import socialUsefulLinksLayerTemplate from './layers/social-useful-links.js';
import socialFrequentlyQuestionsLayerTemplate from './layers/social-frequently-questions.js';
import socialRecommendationsLayerTemplate from './layers/social-recommendations.js';
import socialAfterReceivingTheVoucherTemplate from './layers/social-after-receiving-the-voucher.js';
import socialQuotaAllocationTemplate from './layers/social-quota-allocation.js';

//tours
import toursFilterTemplate from './layers/tours-filter.js';
import toursControlTemplate from './layers/tours-control.js';
import toursCompositeLayerTemplate from './layers/tours-composite-layer.js';

//transfers
import transfersInfoAboutRacesTemplate from './layers/transfers-info-about-races.js';
import transfersEmptyResultSearchTemplate from './layers/transfers-empty-result-search.js';
//family
import familyControlTemplate from './layers/family-control.js';

//kids
import kidsFilterTemplate from './layers/kids-filter.js';

//tours filter
import toursFilterCompositeLayerTemplate from './layers/tours-filter-composite-layer.js';

//tour page
import tourReviewsLayerTemplate from './layers/tour-reviews.js';
import availableDatesTemplate from './layers/available-dates.js';
import tourSeparateExcursionLayerTemplate from './layers/tour-separate-excursion.js';
import tourCompositeLayerTemplate from './layers/tour-composite-layer.js';

//artboard
import artboardEventProgramTemplate from './layers/artboard-event-program.js';
import artboardItemsTemplate from './layers/artboard-items.js';
import artboardChangesTemplate from './layers/artboard-changes.js';
import artboardAdditionalServicesTemplate from './layers/artboard-additional-services.js';

const headerElm = document.body.querySelector('.header');
const content = document.body.querySelector('.content');
const footer = document.body.querySelector('.footer');

//-----Сборка main страницы
/* const result =
  getTemplate("main") +
  mainNewsLayerTemplate +
  mainFirstCompositeLayerTemplate +
  mainSecondCompositeLayerTemplate +
  mainAboutMosgorturLayerTemplate +
  mainLayerWithOffersTemplate +
  mailingLayerTemplate +
  mainLeaderTemplate +
  mainThirdCompositeLayerTemplate +
  mainCorporateServicesTemplate +
  mainOurCampsTemplate; */

//---- Сборка страницы social

/* const result =
  getTemplate("social") +
  socialFirstCompositeLayerTemplate +
  socialNewsLayerTemplate +
  socialWellnessСompanyLayerTemplate +
  socialUsefulLinksLayerTemplate +
  socialQuotaAllocationTemplate +
  socialAfterReceivingTheVoucherTemplate +
  socialFrequentlyQuestionsLayerTemplate +
  socialRecommendationsLayerTemplate; */

//---- сборка страницы tours

/* const result =
  getTemplate("tours") +
  toursFilterTemplate +
  toursCompositeLayerTemplate +
  mailingLayerTemplate +
  guaranteesTemplate +
  previouslyViewedOffers; */

//---- сборка страницы tours-filter

/* const result =
  getTemplate("toursBig") +
  toursFilterCompositeLayerTemplate +
  mailingLayerTemplate +
  previouslyViewedOffers;
 */

//---- сборка страницыTours + search results

/* const result =
  getTemplate("toursSimple") +
  toursControlTemplate +
  offersChildHolidayCompositeTemplate +
  mailingLayerTemplate +
  previouslyViewedOffers; */

//---- сборка страницы Family vacation

/* const result =
  getTemplate("familyBig") +
  toursFilterCompositeLayerTemplate +
  mailingLayerTemplate +
  guaranteesTemplate +
  previouslyViewedOffers; */

//---- сборка страницы Family vacation + search results
/* const result =
  getTemplate("family") +
  familyControlTemplate +
  offersChildHolidayCompositeTemplate +
  mailingLayerTemplate +
  previouslyViewedOffers; */

//---- сборка страницы Kids vacation

/* const result =
  getTemplate("kids") +
  kidsFilterTemplate +
  toursFilterCompositeLayerTemplate +
  mailingLayerTemplate +
  guaranteesTemplate +
  previouslyViewedOffers; */

//---- сборка страницы Kids vacation - filters

/* const result =
  getTemplate("kidsBig") +
  kidsFilterTemplate +
  toursFilterCompositeLayerTemplate +
  mailingLayerTemplate +
  guaranteesTemplate +
  previouslyViewedOffers; */

//---- сборка страницы Kids vacation + search results

/* const result =
  getTemplate("kids") +
  familyControlTemplate +
  offersChildHolidayCompositeTemplate +
  mailingLayerTemplate +
  previouslyViewedOffers; */

//---- Сборка страницы transfers с таблицей

/* const result =
  getTemplate("transfers") +
  transfersInfoAboutRacesTemplate +
  previouslyViewedOffers; */

//---- Сборка страницы transfers empty

/* const result =
  getTemplate("transfers") +
  transfersEmptyResultSearchTemplate +
  previouslyViewedOffers; */

//----- Сбора страницы tour v2
/* 
const result =
  tourSeparateExcursionLayerTemplate +
  availableDatesTemplate +
  tourReviewsLayerTemplate +
  tourCompositeLayerTemplate; */

//Сборка страницы Artboard

const result =
  artboardEventProgramTemplate +
  artboardItemsTemplate +
  artboardChangesTemplate +
  artboardAdditionalServicesTemplate;

headerElm.innerHTML = header;
content.innerHTML = result;
footer.innerHTML = footerTemplate;

/* -------------------- Вставка блоков ---------------------- */

/* //----- DONE! Вставка блока с видеоотзывами
const videoReviewData = {
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    imgName: 'video',
    text: 'Видеоотзывы',
  },
};


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
 */

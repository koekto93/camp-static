import _ from 'lodash';

import {
  mainSecondCompositeLayer,
  captionWithIcon,
  newsItem,
  verticalNewsBlock,
  videoReview,
  mainTopOffers,
  offerCardItem,
} from '../common.js';

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
    text: 'Новости',
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

const mainTopOffersData = {
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    width: '23px',
    height: '15px',
    imgName: 'stars',
    text: 'Лучшие предложения',
  },
  offerCardItem,
  offerCardItemsData: [{ className: '_state-1' }, { className: '_state-1' }],
};

const videoReviewData = {
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    imgName: 'video',
    text: 'Видеоотзывы',
  },
};

const data = {
  className: 'display-flex _j-between',
  verticalNewsBlock,
  verticalNewsBlockData,
  videoReview,
  videoReviewData,
  mainTopOffers,
  mainTopOffersData,
};

const template = mainSecondCompositeLayer(data);

export default template;

import _ from 'lodash';

import {
  toursCompositeLayer,
  captionWithIcon,
  offerCardItem,
  childrenHolidayBlock,
  pagination,
} from '../common.js';

/*  <span class='result-marker'></span><span class='result-count'>20<span> */
const topOffersData = {
  className: '', //для главного блока
  blockClassName: '_row _j-between', //для блока news__block
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    imgName: 'fire-small',
    text: 'Лучшие предложения месяца',
  },

  offerCardItem,
  offerCardItemsData: [
    { className: '_state-2' },
    { className: '_state-2' },
    { className: '_state-2' },
    { className: '_state-2' },
    { className: '_state-2' },
    { className: '_state-2' },
    { className: '_state-2' },
    { className: '_state-2' },
  ],
};

const childrenHolidayData = {
  blockClassName: '_background',
  className: '_gradient',
  offerCardItem,
  offerCardItemsData: [
    { className: '_state-2' },
    { className: '_state-2' },
    { className: '_state-2' },
    { className: '_state-2' },
  ],
};

const data = {
  offerCardItem,
  topOffersData,
  childrenHolidayData,
  childrenHolidayBlock,
  pagination,
};

const template = toursCompositeLayer(data);

export default template;

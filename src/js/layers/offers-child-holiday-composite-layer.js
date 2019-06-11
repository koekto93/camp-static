import _ from 'lodash';

import {
  offersChildHolidayCompositeLayer,
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
    imgName: 'search',
    text: 'Найдено',
  },

  offerCardItem,
  offerCardItemsData: [
    { className: '_state-2' },
    { className: '_state-2' },
    { className: '_state-2' },
    { className: '_state-2' },
    { className: '_state-2' },
    { className: '_state-2' },
  ],
};

const childrenHolidayData = {
  blockClassName: '',
  className: '',
  offerCardItem,
  offerCardItemsData: [
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

const template = offersChildHolidayCompositeLayer(data);

export default template;

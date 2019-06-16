import _ from 'lodash';

import {
  tourCompositeLayer,
  captionWithIcon,
  additionalBookingBlock,
  offerCardItem,
  materialInput,
} from '../common.js';

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

const data = {
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    imgName: 'cloud',
    text: 'Отзывы об экскурсии',
  },
  additionalBookingBlock,
  additionalBookingBlockData,
  offerCardItem,
  offerCardItemsData: [{ className: '_state-2' }, { className: '_state-2' }],
};

const template = tourCompositeLayer(data);

export default template;

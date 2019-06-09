import _ from 'lodash';

import { mainAboutMosgorturLayer, offerCardItem } from '../common.js';

const offerCardItemsData = [
  { className: '_state-1' },
  { className: '_state-1' },
];

const data = {
  className: 'display-flex _j-between',
  offerCardItem,
  offerCardItemsData,
};

const template = mainAboutMosgorturLayer(data);

export default template;

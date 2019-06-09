import _ from 'lodash';

import { mainLayerWithOffers, offerCardItem } from '../common.js';

const offerCardItemsData = [
  { className: '_state-2' },
  { className: '_state-2' },
  { className: '_state-2' },
  { className: '_state-2' },
  { className: '_state-2' },
  { className: '_state-2' },
];

const data = {
  className: 'display-flex _j-between',
  offerCardItem,
  offerCardItemsData,
};

const template = mainLayerWithOffers(data);

export default template;

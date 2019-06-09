import _ from 'lodash';

import {
  mainThirdCompositeLayer,
  mainTopOffers,
  offerCardItem,
  captionWithIcon,
  mainSocialBlock,
} from '../common.js';

const mainTopOffersData = {
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    width: '23px',
    height: '15px',
    imgName: 'stars',
    text: 'Экскурсии',
  },
  offerCardItem,
  offerCardItemsData: [{ className: '_state-1' }, { className: '_state-1' }],
};
const data = {
  className: 'display-flex _j-between',
  mainTopOffers,
  mainTopOffersData,
  mainSocialBlock,
};

const template = mainThirdCompositeLayer(data);

export default template;

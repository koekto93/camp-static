import _ from 'lodash';

import {
  mainCorporateServices,
  corporateServiceItem,
  captionWithIcon,
} from '../common.js';

const data = {
  className: 'display-flex _j-between',
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    width: '23px',
    height: '15px',
    imgName: 'suitcase',
    text: 'Экскурсии',
  },
  corporateServiceItem,
  corporateServiceItemData: [
    { captionText: 'Музеи' },
    { captionText: 'Туризм' },
  ],
};

const template = mainCorporateServices(data);

export default template;

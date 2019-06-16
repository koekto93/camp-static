import _ from 'lodash';

import { availableDatesLayer, captionWithIcon } from '../common.js';

const data = {
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    imgName: 'small-empty-calendar',
    text: 'доступные даты',
  },
  availableDateRowData: [
    { minusСlassName: '', count: 1 },
    { minusСlassName: '_disable', count: 0 },
    { minusСlassName: '_disable', count: 0 },
  ],
};

const template = availableDatesLayer(data);

export default template;

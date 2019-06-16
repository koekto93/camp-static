import _ from 'lodash';

import { tourSeparateExcursionLayer, captionWithIcon } from '../common.js';

const data = {
  caption: true,
  captionWithIcon,
  captionWithIconData: [
    {
      className: '_row _a-center',
      imgName: 'small-calendar',
      text: 'Продолжительность <br> 2 дня',
    },
    {
      className: '_row _a-center',
      imgName: 'small-people',
      text: '3–4 человека <br> в номере',
    },
    {
      className: '_row _a-center',
      imgName: 'small-car',
      text: 'Трансфер из Москвы <br> бесплатно',
    },
    {
      className: '_row _a-center',
      imgName: 'small-like',
      text: '6-разовое питание',
    },
    {
      className: '_row _a-center',
      imgName: 'small-umbrella',
      text: 'Медицинская страховка <br> включена',
    },
  ],
};

const template = tourSeparateExcursionLayer(data);

export default template;

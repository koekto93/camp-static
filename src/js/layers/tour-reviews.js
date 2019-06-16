import _ from 'lodash';

import {
  tourReviewsLayer,
  captionWithIcon,
  tourReviewItem,
} from '../common.js';

const data = {
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    imgName: 'cloud',
    text: 'Отзывы об экскурсии',
  },
  tourReviewItem,
  tourReviewData: ['', '', ''],
};

const template = tourReviewsLayer(data);

export default template;

import _ from 'lodash';

import {
  mailingLayer,
  captionWithIcon,
  materialInput,
  castomRadio,
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
    imgName: 'subscribe',
    text: 'Подписаться на рассылку',
  },
  materialInput,
  materialInputData: { text: 'Ваш e-mail' },
  castomRadio,
};

const template = mailingLayer(data);

export default template;

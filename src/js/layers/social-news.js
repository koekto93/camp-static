import _ from 'lodash';

import {
  socialNewsLayer,
  captionWithIcon,
  newsItem,
  newsBlock,
} from '../common.js';

const socialNewsData = {
  newsBlock,
  newsBlockData: {
    className: '_with-caption _button', //для главного блока
    blockClassName: '_row _j-between', //для блока news__block
    caption: true,
    captionWithIcon,
    captionWithIconData: {
      className: '_row _a-center',
      width: '23px',
      height: '15px',
      imgName: 'news',
      text: 'Новости',
    },

    //newsItem
    newsItem,
    newsItemData: [
      {
        className: '_row',
        date: '01.02.2019',
        time: '14:10',
        text: 'Результаты распределения квот на отдых 2019',
      },
      {
        className: '_row',
        date: '01.02.2019',
        time: '14:10',
        text: 'Результаты распределения квот на отдых 2019',
      },
      {
        className: '_row',
        date: '01.02.2019',
        time: '14:10',
        text: 'Результаты распределения квот на отдых 2019',
      },
    ],
  },
};

const mainNewsLayerTemplate = socialNewsLayer(socialNewsData);

export default mainNewsLayerTemplate;

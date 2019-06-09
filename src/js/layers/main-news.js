import _ from 'lodash';

import { mainNewsLayer, newsItem, newsBlock } from '../common.js';

const mainNewsData = {
  newsBlock,
  newsBlockData: {
    className: '', //для главного блока
    blockClassName: '_row _j-between', //для блока news__block
    //caption
    caption: false,

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

const mainNewsLayerTemplate = mainNewsLayer(mainNewsData);

export default mainNewsLayerTemplate;

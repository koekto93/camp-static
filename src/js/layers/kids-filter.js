import _ from 'lodash';

import { kidsFilter, simpleFilter } from '../common.js';

const data = {
  //caption
  simpleFilter,
  filterData: {
    items: [
      { className: '_active', text: 'Первый раз' },
      { className: '', text: 'На море' },
      { className: '', text: 'Подмосковье' },
      { className: '', text: 'Крым' },
      { className: '', text: 'Спортивный' },
    ],
  },
};

const template = kidsFilter(data);

export default template;

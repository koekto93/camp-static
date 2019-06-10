import _ from 'lodash';

import { toursControl, customSelector } from '../common.js';

const data = {
  //caption
  customSelector,
  customSelectorData: [
    {
      arrow: '_simple-arrow',
      className: '_simple _md',
      textLabel: 'Продолжительность',
    },
    {
      arrow: '_simple-arrow',
      className: '_simple _md',
      textLabel: 'Аудитория',
    },
    { arrow: '_simple-arrow', className: '_simple _md', textLabel: 'Регион' },
    {
      arrow: '_simple-arrow',
      className: '_simple _md',
      textLabel: 'Стоимость',
    },
    { arrow: '_simple-arrow', className: '_simple _md', textLabel: 'Акции' },
  ],
};

const template = toursControl(data);

export default template;

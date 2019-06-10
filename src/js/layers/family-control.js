import _ from 'lodash';

import { familyControl, customSelector } from '../common.js';

const data = {
  //caption
  customSelector,
  firstSelectorData: [
    {
      arrow: '_simple-arrow',
      className: '_simple _md',
      textLabel: 'Отдыхающих',
    },
    {
      arrow: '_simple-arrow',
      className: '_simple _md',
      textLabel: 'Страна',
    },
    { arrow: '_simple-arrow', className: '_simple _md', textLabel: 'Регион' },
    {
      arrow: '_simple-arrow',
      className: '_simple _md',
      textLabel: 'Отель',
    },
    { arrow: '_simple-arrow', className: '_simple _md', textLabel: 'Питание' },
  ],
  secondSelectorData: [
    {
      arrow: '_simple-arrow',
      className: '_simple _md',
      textLabel: 'Дата заезда',
    },
    {
      arrow: '_simple-arrow',
      className: '_simple _md',
      textLabel: 'Дата выезда',
    },
    { arrow: '_simple-arrow', className: '_simple _md', textLabel: 'Цена от' },
    {
      arrow: '_simple-arrow',
      className: '_simple _md',
      textLabel: 'Цена до',
    },
  ],
};

const template = familyControl(data);

export default template;

import _ from 'lodash';

import { guaranteesLayer, captionWithIcon } from '../common.js';

const data = {
  //caption
  captionWithIcon,
  captions: [
    {
      className: '_column _a-center _circle-icon-border',
      imgName: 'umbrella',
      text:
        'Безопасность в пути:<br> расширенное страхование<br> включено в стоимость',
    },
    {
      className: '_column _a-center _circle-icon-border',
      imgName: 'docs',
      text: 'Более 200 экскурсий <br> от 50 партнеров — выбор есть!',
    },
    {
      className: '_column _a-center _circle-icon-border',
      imgName: 'money',
      text:
        'Защита от невыезда:<br> возвращаем 100% стоимости <br> путевки при отказе',
    },
  ],
};

const template = guaranteesLayer(data);

export default template;

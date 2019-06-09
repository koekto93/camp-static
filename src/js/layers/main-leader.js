import _ from 'lodash';

import { mainLeader, leaderCard, captionWithIcon } from '../common.js';

const data = {
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    width: '23px',
    height: '15px',
    imgName: 'glass',
    text: 'Вожатым',
  },
  leaderCard,
  leaderCardData: [
    {
      caption: 'Памятка о работе вожатого',
      info: 'Все важные ддокументы и порядки',
    },
    {
      caption: 'Школа вожатых',
      info: 'Мы научим вас любить лето и зиму круглый год',
    },
    {
      caption: 'Вакансии',
      info: 'Полный список доступных вакансий вожатых',
    },
  ],
};

const template = mainLeader(data);

export default template;

import _ from 'lodash';

import {
  mainFirstCompositeLayer,
  arrivalsContainer,
  captionWithIcon,
  arrivalsBlock,
  arrivalItem,
  infoSimpleCard,
  innerElementOfInfoCard,
  importantInfoBlock,
  importantInfoContainer,
} from '../common.js';

const importantInfoContainerData = {
  className: '', //для главного блока
  blockClassName: '_row _j-between', //для блока news__block
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    imgName: 'important',
    text: 'Важная информация',
  },

  importantInfoBlock,
  importantInfoBlockData: {
    infoSimpleCard,
    infoSimpleCardsData: [
      {
        innerElementOfInfoCard,
        innerElementData: {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center _circle-icon-border',
            imgName: 'respect',
            text: 'Как получить льготу',
          },
          description: false,
        },
        backSide: true, //включает и выключает обратную сторону карточки при наведении
        backCaptionText: 'Как получить льготу',
        backText:
          'Заявление о предоставлении услуг отдыха и оздоровления может подать родитель (иной законный представитель) или доверенное лицо на совершение действий в период проведения заявочной кампании.',
      },
      {
        innerElementOfInfoCard,
        innerElementData: {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center _circle-icon-border',
            imgName: 'sun',
            text: 'Квоты на отдых и оздоровление в 2019 году',
          },
          description: false,
        },
        backSide: false, //включает и выключает обратную сторону карточки при наведении
      },
      {
        innerElementOfInfoCard,
        innerElementData: {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center _circle-icon-border',
            imgName: 'wallet',
            text: 'Порядок выплаты частичной компенсации',
          },
          description: false,
        },
        backSide: false, //включает и выключает обратную сторону карточки при наведении
      },
      {
        innerElementOfInfoCard,
        innerElementData: {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center _circle-icon-border',
            imgName: 'people',
            text: 'Список льготных категорий',
          },
          description: false,
        },
        backSide: false, //включает и выключает обратную сторону карточки при наведении
      },
      {
        innerElementOfInfoCard,
        innerElementData: {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center _circle-icon-border',
            imgName: 'lodge',
            text: 'Бесплатные путевки в Орленок для одаренных детей',
          },
          description: false,
        },
        backSide: false, //включает и выключает обратную сторону карточки при наведении
      },
    ],
  },
};

const arrivalsContainerData = {
  className: '', //для главного блока
  blockClassName: '_row _j-between', //для блока news__block
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    width: '32px',
    height: '16px',
    imgName: 'car',
    text: 'информация о заездах сегодня',
  },

  //arrivalsBlock
  arrivalsBlock,
  arrivalsBlockData: [
    {
      caption: 'ЗАЕЗДЫ —20–27 ИЮНЯ 2019',
      arrivalItem,
      arrivalItems: [
        {
          className: '_column',
          date: '01.02.2019',
          time: '14:10',
          address: 'Результаты распределения квот на отдых 2019',
          city: 'адлер',
        },
        {
          className: '_column',
          date: '01.02.2019',
          time: '14:10',
          address: 'Результаты распределения квот на отдых 2019',
          city: 'адлер',
        },
      ],
    },
    {
      caption: 'ВЫЕЗДЫ —20–27 ИЮНЯ 2019',
      arrivalItem,
      arrivalItems: [
        {
          className: '_column',
          date: '01.02.2019',
          time: '14:10',
          address: 'Результаты распределения квот на отдых 2019',
          city: 'адлер',
        },
        {
          className: '_column',
          date: '01.02.2019',
          time: '14:10',
          address: 'Результаты распределения квот на отдых 2019',
          city: 'адлер',
        },
      ],
    },
  ],
};

const data = {
  className: 'display-flex _j-between',
  arrivalsContainer,
  arrivalsContainerData,
  importantInfoContainer,
  importantInfoContainerData,
};

const template = mainFirstCompositeLayer(data);

export default template;

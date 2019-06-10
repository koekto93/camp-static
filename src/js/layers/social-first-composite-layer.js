import _ from 'lodash';

import {
  socialFirstCompositeLayer,
  arrivalsContainer,
  captionWithIcon,
  additionalBookingBlock,
  materialInput,
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
      {
        innerElementOfInfoCard,
        innerElementData: {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center _circle-icon-border',
            imgName: 'blanks',
            text:
              'Постановление Правительства Москвы № 56-ПП «Об организации отдыха и оздоровления детей, находящихся в трудной жизненной ситуации» (в актуальной редакции от 18 октября 2018 г.)',
          },
          description: false,
        },
        backSide: false, //включает и выключает обратную сторону карточки при наведении
      },
    ],
  },
};

const additionalBookingBlockData = {
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_column _a-center',
    imgName: 'calendar',
    text: 'Бронирование дополнительных мест и услуг',
  },
  description: false,
  materialInput,
  materialInputData: [{ text: 'Номер путевки' }, { text: 'Фамилия заявителя' }],
};

const data = {
  className: 'display-flex _j-between',
  importantInfoContainer,
  importantInfoContainerData,
  additionalBookingBlock,
  additionalBookingBlockData,
};

const template = socialFirstCompositeLayer(data);

export default template;

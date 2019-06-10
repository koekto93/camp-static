import _ from 'lodash';

import {
  socialFrequentlyQuestionsLayer,
  captionWithIcon,
  infoDoubleCard,
  innerElementOfInfoCard,
} from '../common.js';

const frequentlyQuestionsData = {
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    imgName: 'question',
    text: 'Ответы на частые вопросы',
  },

  //cardItems
  infoDoubleCard,
  cardItems: [
    {
      className: '_separator',
      innerElementOfInfoCard,
      innerElementData: [
        {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center',
            imgName: 'empty-calendar',
            text: 'Как отказаться от заявления или изменить его?',
          },
          description: true,
          descriptionText: 'Исправление заявление и условия отказа от путевки',
        },
        {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center',
            imgName: 'done',
            text: 'Как застрахованы дети и взрослые в пути и на отдыхе?',
          },
          description: true,
          descriptionText:
            'Дополнительное страхование по полису путешествующего',
        },
      ],
      backSide: false, //включает и выключает обратную сторону карточки при наведении
    },
    {
      className: '_separator',
      innerElementOfInfoCard,
      innerElementData: [
        {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center',
            imgName: 'empty-calendar',
            text: 'Как добираться до места отдыха?',
          },
          description: true,
          descriptionText:
            'Трансфер до лагеря или базы отдыха и  безопасность в пути',
        },
        {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center',
            imgName: 'done',
            text: 'Как организовано питание в пути?',
          },
          description: true,
          descriptionText:
            'Режим питания для детского и семейного отдыха в самолете, поезде и автобусе',
        },
      ],
      backSide: false, //включает и выключает обратную сторону карточки при наведении
    },
    {
      className: '_separator',
      innerElementOfInfoCard,
      innerElementData: [
        {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center',
            imgName: 'empty-calendar',
            text: 'Как получить сертификат на частичную компенсацию',
          },
          description: true,
          descriptionText:
            'Условия и порядок получения сертификата на отдых и оздоровление',
        },
        {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_column _a-center',
            imgName: 'done',
            text: 'Как получить дополнительное место для семейного отдыха?',
          },
          description: true,
          descriptionText:
            'Совместный отдых с членами семьи, которые не имеют права на льготу',
        },
      ],
      backSide: false, //включает и выключает обратную сторону карточки при наведении
    },
  ],
};

const frequentlyQuestionsLayerTemplate = socialFrequentlyQuestionsLayer(
  frequentlyQuestionsData,
);

export default frequentlyQuestionsLayerTemplate;

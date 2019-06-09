import _ from 'lodash';

import {
  recommendationsLayer,
  recommendCardItem,
  captionWithIcon,
} from '../common.js';

const recommendationsData = {
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: '_row _a-center',
    imgName: 'stars',
    text: 'Рекомендации',
  },
  recommendCardItem,
  recommendCardsData: [
    {
      captions: [
        {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_row _a-center',
            imgName: 'white-mark',
            text: 'Мультимедиа-арт-музей МоМА на Остоженке',
          },
        },
        {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_row _a-center',
            imgName: 'white-wallet',
            text: 'от 250р',
          },
        },
      ],
    },
    {
      captions: [
        {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_row _a-center',
            imgName: 'white-mark',
            text: 'Мультимедиа-арт-музей МоМА на Остоженке',
          },
        },
        {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_row _a-center',
            imgName: 'white-wallet',
            text: 'от 250р',
          },
        },
      ],
    },
    {
      captions: [
        {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_row _a-center',
            imgName: 'white-mark',
            text: 'Мультимедиа-арт-музей МоМА на Остоженке',
          },
        },
        {
          caption: true,
          captionWithIcon,
          captionWithIconData: {
            className: '_row _a-center',
            imgName: 'white-wallet',
            text: 'от 250р',
          },
        },
      ],
    },
  ],
};

const recommendationsLayerTemplate = recommendationsLayer(recommendationsData);

export default recommendationsLayerTemplate;

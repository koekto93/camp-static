import _ from 'lodash';

import {
  headerLayer,
  contentHeaderMain,
  contentHeaderTours,
  input,
} from '../common.js';

const headerData = {
  //className: '_main',
  //contentItem: contentHeaderMain,
  /* contentItemData: {
    className: '_main _border-bottom',
  }, */

  className: '_tours',
  contentItem: contentHeaderTours,
  contentItemData: {
    className: '',
    input,
  },

  //className: '_transfers',
  //contentItem: contentHeaderMain,

  //className: '_family-vacation',
  //contentItem: contentHeaderMain,

  //className: '_kids',
  //contentItem: contentHeaderMain,
};

const headerLayerTemplate = headerLayer(headerData);

export default headerLayerTemplate;

import _ from "lodash";

import {
  previouslyViewedOffers,
  captionWithIcon,
  offerCardItem,
  mainTopOffers
} from "../common.js";

const mainTopOffersData = {
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: "_row _a-center",
    imgName: "eye",
    text: "Вы смотрели"
  },

  offerCardItem,
  offerCardItemsData: [
    { className: "_state-2" },
    { className: "_state-2" },
    { className: "_state-2" }
  ]
};

const data = {
  mainTopOffers,
  mainTopOffersData
};

const template = previouslyViewedOffers(data);

export default template;

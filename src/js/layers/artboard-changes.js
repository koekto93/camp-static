import _ from "lodash";

import { artboardChangesLayer, customSelector } from "../common.js";

const data = {
  customSelector,
  customSelectorData: {
    arrow: "_simple-arrow",
    className: "_simple _md",
    textLabel: ""
  },
  availableDateRowData: [
    { minusСlassName: "", count: 1 },
    { minusСlassName: "_disable", count: 0 },
    { minusСlassName: "_disable", count: 0 }
  ]
};

const template = artboardChangesLayer(data);

export default template;

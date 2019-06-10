import _ from "lodash";

import { toursFilter, simpleFilter } from "../common.js";

const data = {
  //caption
  simpleFilter,
  firstFilterData: {
    items: [
      { className: "_active", text: "Одним днем" },
      { className: "", text: "На выходные" },
      { className: "", text: "Популярные" },
      { className: "", text: "Акции" },
      { className: "", text: "Автобусные" },
      { className: "", text: "Для школьников" },
      { className: "", text: "Инклюзивные" }
    ]
  },
  secondFilterData: {
    items: [
      { className: "_active", text: "Подмосковье" },
      { className: "", text: "Города России" },
      { className: "", text: "По Европе" }
    ]
  }
};

const template = toursFilter(data);

export default template;

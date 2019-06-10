import _ from "lodash";

import {
  guaranteesLayer,
  captionWithIcon,
  customSelector,
  customDatepicker
} from "../common.js";

const data = {
  //caption
  customSelector,
  customDatepicker,
  captionWithIcon,
  captions: [
    {
      className: "_column _a-center",
      imgName: "umbrella",
      text:
        "Безопасность в пути:<br> расширенное страхование<br> включено в стоимость"
    },
    {
      className: "_column _a-center",
      imgName: "docs",
      text: "Более 200 экскурсий <br> от 50 партнеров — выбор есть!"
    },
    {
      className: "_column _a-center",
      imgName: "money",
      text:
        "Защита от невыезда:<br> возвращаем 100% стоимости <br> путевки при отказе"
    }
  ]
};

const template = guaranteesLayer(data);

export default template;

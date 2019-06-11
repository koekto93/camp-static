import _ from "lodash";

import {
  transfersInfoAboutRaces,
  captionWithIcon,
  transferInfoTableItem
} from "../common.js";

const transferInfoTableItemData = [
  {
    type: "Прибытие",
    date: "01.09.2019",
    time: "19:10",
    camp: "ДОЛ «Мечта на морском береге» <br> (01.02.2019 — 03.02.2019)",
    fromAddress: "Московская область, Одинцовский район д. Ершово",
    toAddress: "Москва, Курский вокзал, поезд 123"
  },
  {
    type: "Отбытие",
    date: "01.09.2019",
    time: "19:20",
    camp: "ДОЛ «Мечта на морском береге» <br> (01.02.2019 — 03.02.2019)",
    fromAddress: "Московская область, Одинцовский район д. Ершово",
    toAddress: "Москва, Курский вокзал, поезд 123"
  },
  {
    type: "Прибытие",
    date: "01.09.2019",
    time: "19:10",
    camp: "ДОЛ «Мечта на морском береге» <br> (01.02.2019 — 03.02.2019)",
    fromAddress: "Московская область, Одинцовский район д. Ершово",
    toAddress: "Москва, Курский вокзал, поезд 123"
  },
  {
    type: "Отбытие",
    date: "01.09.2019",
    time: "19:20",
    camp: "ДОЛ «Мечта на морском береге» <br> (01.02.2019 — 03.02.2019)",
    fromAddress: "Московская область, Одинцовский район д. Ершово",
    toAddress: "Москва, Курский вокзал, поезд 123"
  },
  {
    type: "Прибытие",
    date: "01.09.2019",
    time: "19:10",
    camp: "ДОЛ «Мечта на морском береге» <br> (01.02.2019 — 03.02.2019)",
    fromAddress: "Московская область, Одинцовский район д. Ершово",
    toAddress: "Москва, Курский вокзал, поезд 123"
  }
];

const data = {
  //caption
  //caption
  caption: true,
  captionWithIcon,
  captionWithIconData: {
    className: "_row _a-center",
    imgName: "car",
    text: "информация о заездах сегодня"
  },
  transferInfoTableItem,
  transferInfoTableItemData
};

const template = transfersInfoAboutRaces(data);

export default template;

/* import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

jQuery(function() {
  jQuery("body").css("color", "blue");
}); */

// Render main template to the DOM
// document.body.innerHTML = _.template(mainTemplate, model);
import _ from "lodash";

const captionWithIcon = _.template(
  require("./../html/includes/caption-with-icon.html").default
);

const newsItem = _.template(
  require("./../html/includes/news-item.html").default
);

const firstPageData = {
  title: "Заголовок | Проект",
  author: "Harrix",
  //caption
  captionWithIcon: captionWithIcon,
  captionWithIconData: {
    className: "_row _a-center",
    width: "23px",
    height: "15px",
    imgName: "news",
    text: "Важная информация"
  },
  //newsItem
  newsItem: newsItem,
  newsItemData: {
    className: "_row",
    date: "01.02.2019",
    time: "14:10",
    text: "Результаты распределения квот на отдых 2019"
  }
};
const text = _.template(require("./../html/includes/text.html").default);

const content = document.body.querySelector(".content-container");

content.innerHTML = text(firstPageData);

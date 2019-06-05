/* import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

jQuery(function() {
  jQuery("body").css("color", "blue");
}); */

// Render main template to the DOM
// document.body.innerHTML = _.template(mainTemplate, model);
import _ from "lodash";

const caption = _.template(
  require("./../html/includes/caption-with-icon.html").default
);

console.log(caption);

const firstPageData = {
  title: "Заголовок | Проект",
  author: "Harrix",
  caption: caption
};
const text = _.template(require("./../html/includes/text.html").default);

const content = document.body.querySelector(".content-container");

content.innerHTML = text(firstPageData);

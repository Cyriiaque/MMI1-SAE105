import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L1/Testimonial/Testimonial_02_L1/Testimonial_02_L1.html"
);

let Testimonial = {};

Testimonial.format = function (obj) {
  let html = template;
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{card_img}}", obj.card_img);
  html = html.replace("{{card_text}}", obj.card_text);
  html = html.replace("{{card_title}}", obj.card_title);
  html = html.replace("{{card_text2}}", obj.card_text2);
  return html;
};

Testimonial.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Testimonial.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Testimonial };

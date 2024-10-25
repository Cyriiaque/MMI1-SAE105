import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L1/Showcase/Showcase_01_L1/Showcase_01_L1.html"
);

let template2 = await loadTemplate(
  "./composants_L1/Showcase/Showcase_01_L1/template2.html"
);

let Showcase = {};

Showcase.format = function (obj) {
  let html = template;

  let tmp = "";
  for (let elt of obj.card) {
    tmp += template2.replace("{{card_title}}", elt.card_title);
    tmp = tmp.replace("{{card_text}}", elt.card_text);
    tmp = tmp.replace("{{card_button}}", elt.card_button);
    tmp = tmp.replace("{{card_img}}", elt.card_img);
  }
  html = html.replace("{{liste}}", tmp);

  return html;
};

Showcase.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Showcase.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Showcase };

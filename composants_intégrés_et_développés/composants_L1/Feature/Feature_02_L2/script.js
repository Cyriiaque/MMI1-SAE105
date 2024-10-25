import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L1/Feature/Feature_02_L2/Feature_02_L2.html"
);

let template2 = await loadTemplate(
  "./composants_L1/Feature/Feature_02_L2/template2.html"
);

let Feature = {};

Feature.format = function (obj) {
  let html = template;
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{text}}", obj.text);

  let tmp = "";
  for (let elt of obj.card) {
    tmp += template2.replace("{{card_img}}", elt.card_img);
    tmp = tmp.replace("{{card_title}}", elt.card_title);
    tmp = tmp.replace("{{card_text}}", elt.card_text);
  }
  html = html.replace("{{liste}}", tmp);

  return html;
};

Feature.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Feature.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Feature };

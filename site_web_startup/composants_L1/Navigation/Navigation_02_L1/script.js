import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L1/Navigation/Navigation_02_L1/Navigation_02_L1.html"
);

let template2 = await loadTemplate(
  "./composants_L1/Navigation/Navigation_02_L1/template2.html"
);

let Navigation = {};

Navigation.format = function (obj) {
  let html = template;
  html = html.replace("{{logo}}", obj.logo);
  html = html.replace("{{lien1}}", obj.lien1);
  html = html.replace("{{rubrique1}}", obj.rubrique1);
  html = html.replace("{{lien2}}", obj.lien2);
  html = html.replace("{{rubrique2}}", obj.rubrique2);
  html = html.replace("{{lien3}}", obj.lien3);
  html = html.replace("{{rubrique3}}", obj.rubrique3);
  html = html.replace("{{buy}}", obj.buy);
  return html;
};

Navigation.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Navigation.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Navigation };

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

  let tmp = "";
  for (let rubrique of obj.rubrique) {
    tmp += template2.replace("{{rubrique}}", rubrique);
  }
  html = html.replace("{{liste}}", tmp);

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

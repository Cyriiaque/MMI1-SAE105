import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L1/Hero/hero_04_L1/hero_04_L1.html"
);

let Hero = {};

Hero.format = function (obj) {
  let html = template;
  html = html.replace("{{background}}", obj.background);
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{text}}", obj.text);
  html = html.replace("{{btn_white}}", obj.btn_white);
  html = html.replace("{{btn_transparent}}", obj.btn_transparent);
  return html;
};

Hero.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Hero.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Hero };

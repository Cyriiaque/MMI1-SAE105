import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L1/Content/Content_06_L1/Content_06_L1.html"
);

let Content = {};

Content.format = function (obj) {
  let html = template;
  html = html.replace("{{background}}", obj.background);
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{text}}", obj.text);
  return html;
};

Content.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Content.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Content };

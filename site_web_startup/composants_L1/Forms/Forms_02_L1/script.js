import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L1/Forms/Forms_02_L1/Forms_02_L1.html"
);

let Forms = {};

Forms.format = function (obj) {
  let html = template;
  html = html.replace("{{background}}", obj.background);
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{text}}", obj.text);
  html = html.replace("{{first_input}}", obj.first_input);
  html = html.replace("{{second_input}}", obj.second_input);
  html = html.replace("{{button}}", obj.button);
  html = html.replace("{{text2}}", obj.text2);
  return html;
};

Forms.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Forms.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Forms };

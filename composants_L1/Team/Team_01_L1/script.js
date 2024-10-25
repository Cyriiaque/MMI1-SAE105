import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L1/Team/Team_01_L1/Team_01_L1.html"
);

let template2 = await loadTemplate(
  "./composants_L1/Team/Team_01_L1/template2.html"
);

let Team = {};

Team.format = function (obj) {
  let html = template;
  html = html.replace("{{text}}", obj.text);
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{text2}}", obj.text2);

  let tmp = "";
  for (let elt of obj.card) {
    tmp += template2.replace("{{card_img}}", elt.card_img);
    tmp = tmp.replace("{{card_title}}", elt.card_title);
    tmp = tmp.replace("{{card_text}}", elt.card_text);
  }
  html = html.replace("{{liste}}", tmp);

  return html;
};

Team.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Team.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Team };

import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L3/Call_to_action/Call_to_action_05_L3/Call_to_action_05_L3.html"
);

let template2 = await loadTemplate(
  "./composants_L3/Call_to_action/Call_to_action_05_L3/template2.html"
);

let Call_to_actionl3 = {};

Call_to_actionl3.format = function (obj) {
  let html = template;
  html = html.replace("{{background}}", obj.background);
  html = html.replace("{{text}}", obj.text);
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{video}}", obj.video);

  let tmp = "";
  for (let elt of obj.card) {
    tmp += template2.replace("{{card_title}}", elt.card_title);
    tmp = tmp.replace("{{card_text}}", elt.card_text);
  }
  html = html.replace("{{liste}}", tmp);

  return html;
};

Call_to_actionl3.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Call_to_actionl3.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Call_to_actionl3 };

import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L1/Call_to_action/Call_to_action_01_L1/Call_to_action_01_L1.html"
);

let Call_to_action = {};

Call_to_action.format = function (obj) {
  let html = template;
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{text}}", obj.text);
  html = html.replace("{{button_turquoise}}", obj.button_turquoise);
  html = html.replace("{{button_transparent}}", obj.button_transparent);
  return html;
};

Call_to_action.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Call_to_action.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Call_to_action };

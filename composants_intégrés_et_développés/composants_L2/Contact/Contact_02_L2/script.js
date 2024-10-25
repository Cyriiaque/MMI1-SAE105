import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L2/Contact/Contact_02_L2/Contact_02_L2.html"
);

let template2 = await loadTemplate(
  "./composants_L2/Contact/Contact_02_L2/template2.html"
);

let Contactl2 = {};

Contactl2.format = function (obj) {
  let html = template;
  html = html.replace("{{text}}", obj.text);
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{first_input}}", obj.first_input);
  html = html.replace("{{second_input}}", obj.second_input);
  html = html.replace("{{button}}", obj.button);

  let tmp = "";
  for (let elt of obj.card) {
    tmp += template2.replace("{{card_title}}", elt.card_title);
    tmp = tmp.replace("{{card_text}}", elt.card_text);
  }
  html = html.replace("{{liste}}", tmp);

  return html;
};

Contactl2.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Contactl2.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Contactl2 };

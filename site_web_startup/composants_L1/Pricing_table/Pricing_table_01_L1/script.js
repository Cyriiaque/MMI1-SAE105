import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L1/Pricing_table/Pricing_table_01_L1/Pricing_table_01_L1.html"
);

let Pricing_table = {};

Pricing_table.format = function (obj) {
  let html = template;
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{text}}", obj.text);
  html = html.replace("{{card_title}}", obj.card_title);
  html = html.replace("{{card_subtitle}}", obj.card_subtitle);
  html = html.replace("{{card_text}}", obj.card_text);
  html = html.replace("{{card_button}}", obj.card_button);
  return html;
};

Pricing_table.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Pricing_table.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Pricing_table };

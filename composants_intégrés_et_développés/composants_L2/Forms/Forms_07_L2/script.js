import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L2/Forms/Forms_07_L2/Forms_07_L2.html"
);

let template2 = await loadTemplate(
  "./composants_L2/Forms/Forms_07_L2/template2.html"
);

let template3 = await loadTemplate(
  "./composants_L2/Forms/Forms_07_L2/template3.html"
);

let Formsl2 = {};

Formsl2.format = function (obj) {
  let html = template;
  html = html.replace("{{title}}", obj.title);
  html = html.replace("{{card1_title}}", obj.card1_title);
  html = html.replace("{{card1_text}}", obj.card1_text);

  let tmp = "";
  for (let card1_logo of obj.card1_logo) {
    tmp += template2.replace("{{card1_logo}}", card1_logo);
  }
  html = html.replace("{{liste1}}", tmp);

  html = html.replace("{{card1_input}}", obj.card1_input);
  html = html.replace("{{card1_button}}", obj.card1_button);
  html = html.replace("{{card2_title}}", obj.card2_title);
  html = html.replace("{{card2_text}}", obj.card2_text);

  let tmp2 = "";
  for (let card2_logo of obj.card2_logo) {
    tmp2 += template3.replace("{{card2_logo}}", card2_logo);
  }
  html = html.replace("{{liste2}}", tmp2);

  html = html.replace("{{card2_title1}}", obj.card2_title1);
  html = html.replace("{{card2_title2}}", obj.card2_title2);
  html = html.replace("{{card2_title3}}", obj.card2_title3);
  html = html.replace("{{card2_title4}}", obj.card2_title4);
  html = html.replace("{{card2_button}}", obj.card2_button);

  return html;
};

Formsl2.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Formsl2.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Formsl2 };

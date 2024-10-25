import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L1/Contact/Contact_01_L1/Contact_01_L1.html"
);

let template2 = await loadTemplate(
  "./composants_L1/Contact/Contact_01_L1/template2.html"
);

let Contact = {};

Contact.format = function (obj) {
  let html = template;
  html = html.replace("{{background}}", obj.background);
  html = html.replace("{{title1}}", obj.title1);
  html = html.replace("{{text1}}", obj.text1);
  html = html.replace("{{title2}}", obj.title2);
  html = html.replace("{{text2}}", obj.text2);
  html = html.replace("{{title3}}", obj.title3);
  html = html.replace("{{text3}}", obj.text3);
  html = html.replace("{{title4}}", obj.title4);

  let tmp = "";
  for (let link of obj.link) {
    tmp += template2.replace("{{link}}", link);
  }
  html = html.replace("{{liste}}", tmp);

  return html;
};

Contact.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Contact.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Contact };

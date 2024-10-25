import { loadTemplate, loadJSON } from "../../../js/loader.js";

let template = await loadTemplate(
  "./composants_L1/Footer/Footer_06_L1/Footer_06_L1.html"
);

let template2 = await loadTemplate(
  "./composants_L1/Footer/Footer_06_L1/template2.html"
);

let template3 = await loadTemplate(
  "./composants_L1/Footer/Footer_06_L1/template3.html"
);

let template4 = await loadTemplate(
  "./composants_L1/Footer/Footer_06_L1/template4.html"
);

let Footer = {};

Footer.format = function (obj) {
  let html = template;
  html = html.replace("{{title}}", obj.title);

  let tmp1 = "";
  for (let rule of obj.rule) {
    tmp1 += template2.replace("{{rule}}", rule);
  }
  html = html.replace("{{rules_list}}", tmp1);

  let tmp2 = "";
  for (let icon of obj.icon) {
    tmp2 += template3.replace("{{icon}}", icon);
  }
  html = html.replace("{{icons_list}}", tmp2);

  html = html.replace("{{rubrique1}}", obj.rubrique1);
  html = html.replace("{{link1}}", obj.link1);
  html = html.replace("{{rubrique2}}", obj.rubrique2);
  html = html.replace("{{link2}}", obj.link2);
  html = html.replace("{{rubrique3}}", obj.rubrique3);
  html = html.replace("{{link3}}", obj.link3);
  html = html.replace("{{rubrique4}}", obj.rubrique4);
  html = html.replace("{{link4}}", obj.link4);

  html = html.replace("{{rule_last}}", obj.rule_last);
  return html;
};

Footer.render = async function (selector, jsonFilename) {
  let data = await loadJSON(jsonFilename);
  let html = "";
  for (let obj of data) {
    html += Footer.format(obj);
  }

  let where = document.querySelector(selector);
  where.innerHTML = where.innerHTML + html;
};

export { Footer };

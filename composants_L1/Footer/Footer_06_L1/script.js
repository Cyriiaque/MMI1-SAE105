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

  let tmp3 = "";
  for (let rubrique of obj.rubrique) {
    tmp3 += template4.replace("{{rubrique}}", rubrique);
  }
  html = html.replace("{{rubriques_list}}", tmp3);

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

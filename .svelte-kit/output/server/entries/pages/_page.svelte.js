import { c as create_ssr_component, v as validate_component, a as add_attribute, b as each, e as escape } from "../../chunks/ssr.js";
import { a as getAssetURL, M as MY_SKILLS } from "../../chunks/skills.params.js";
import { U as UIcon } from "../../chunks/UIcon.js";
import { I as Icons, H as HOME, g as getPlatfromIcon, u as useTitle, T as TITLE_SUFFIX } from "../../chunks/params.js";
import { M as MainTitle } from "../../chunks/MainTitle.js";
import { isBlank } from "@riadh-adrani/utils";
const Carrousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let element;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `<div class="carrousel flex-[0.5] row-center"><button class="row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-chevron-left" }, {}, {})}</button> <div class="row overflow-hidden box-content w-150px"${add_attribute("this", element, 0)}>${each(items, (item) => {
    return `<div class="box-content w-150px p-15px col-center"><img class="w-120px h-120px aspect-square"${add_attribute("src", getAssetURL(item.logo), 0)}${add_attribute("alt", item.name, 0)}> <span class="text-center m-t-20px">${escape(item.name)}</span> </div>`;
  })}</div> <button class="row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-chevron-right" }, {}, {})}</button></div>`;
});
const viewBox = (icon) => {
  if (icon === Icons.Youtube)
    return "0 0 461.001 461.001";
  if (icon === Icons.Facebook)
    return "0 0 408.788 408.788";
  return [Icons.GitHub, Icons.Search, Icons.Code].includes(icon) ? "0 0 16 16" : "0 0 24 24";
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let el;
  let { size = "30px" } = $$props;
  let { color = "var(--main-text)" } = $$props;
  let { icon } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  return `<svg class="inline-block"${add_attribute("viewBox", viewBox(icon), 0)}${add_attribute("fill", color, 0)}${add_attribute("height", size, 0)}${add_attribute("width", size, 0)}${add_attribute("this", el, 0)}><path${add_attribute("d", icon, 0)}></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { description, lastName, links, name, title, skills } = HOME;
  const isEmail = (email) => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !isBlank(email) && reg.test(email);
  };
  return `${$$result.head += `<!-- HEAD_svelte-gorrxo_START -->${$$result.title = `<title>${escape(useTitle(title, TITLE_SUFFIX))}</title>`, ""}<!-- HEAD_svelte-gorrxo_END -->`, ""} <div class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"><div class="md:flex-1 gap-10px">${validate_component(MainTitle, "MainTitle").$$render($$result, { classes: "md:text-left " }, {}, {
    default: () => {
      return `${escape(name)} ${escape(lastName)},`;
    }
  })} <p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight">${escape(description)}</p> <div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">${each(links, (link) => {
    return `<a class="decoration-none"${add_attribute("href", `${isEmail(link.link) ? "mailto:" : ""}${link.link}`, 0)} target="_blank" rel="noreferrer">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: getPlatfromIcon(link.platform),
        color: "var(--accent-text)",
        size: "20px"
      },
      {},
      {}
    )} </a>`;
  })}</div></div> ${validate_component(Carrousel, "Carrousel").$$render($$result, { items: skills ?? MY_SKILLS }, {}, {})}</div>`;
});
export {
  Page as default
};

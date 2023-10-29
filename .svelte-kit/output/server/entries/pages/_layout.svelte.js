import { a as subscribe, c as null_to_empty } from "../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, b as each } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { H as HOME, N as NavBar } from "../../chunks/params.js";
import { t as theme } from "../../chunks/skills.params.js";
import { b as base } from "../../chunks/paths.js";
import { U as UIcon } from "../../chunks/UIcon.js";
const __uno = "";
const NavMenu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".nav-menu.svelte-z8k68j{display:flex;justify-content:center;position:sticky;top:0px;z-index:10;padding:0px 10px;border-bottom:1px solid var(--secondary);background-color:var(--main)}.nav-menu-item.svelte-z8k68j{text-decoration:none;font-weight:400;padding:10px 20px;color:inherit;display:flex;align-items:center;border-bottom:3px solid transparent}.nav-menu-item-label.svelte-z8k68j{margin-left:10px}@media(max-width: 950px){.nav-menu-item-label.svelte-z8k68j{display:none}}.nav-menu-item.svelte-z8k68j:hover{background-color:var(--main-hover)}",
  map: null
};
const NavMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  const items = [
    {
      title: NavBar.skills,
      to: "/skills",
      icon: "i-carbon-software-resource-cluster"
    },
    {
      title: NavBar.personal,
      to: "/projects",
      icon: "i-carbon-cube"
    },
    {
      title: NavBar.career,
      to: "/experience",
      icon: "i-carbon-development"
    },
    {
      title: NavBar.resume,
      to: "/resume",
      icon: "i-carbon-result"
    }
  ];
  $$result.css.add(css$1);
  {
    {
      if ($page) {
        $page.url.pathname;
      }
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_theme();
  return `<div class="nav-menu svelte-z8k68j"><nav class="container !justify-between flex flex-row items-center text-sm"><a${add_attribute("href", `${base}/`, 0)} class="nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-code",
      classes: "text-2em"
    },
    {},
    {}
  )} <span class="ml-2 text-md font-bold hidden md:inline">${escape(HOME.name)} ${escape(HOME.lastName)}</span></a> <div class="flex flex-row flex-1 self-center justify-center">${each(items, (item) => {
    return `<a${add_attribute("href", `${base}${item.to}`, 0)} class="nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j">${validate_component(UIcon, "UIcon").$$render($$result, { icon: item.icon, classes: "text-1.3em" }, {}, {})} <span class="nav-menu-item-label svelte-z8k68j">${escape(item.title)}</span> </a>`;
  })}</div> <div class="flex flex-row self-stretch items-stretch gap-1 text-1.15em"><a${add_attribute("href", `${base}/search`, 0)} class="text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-search" }, {}, {})}</a> <button class="bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2">${$theme ? `${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-moon" }, {}, {})}` : `${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-sun" }, {}, {})}`}</button></div></nav> </div>`;
});
const index = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-mb6t29{display:flex;flex-direction:column;flex:1;padding:0px 0px}.body.svelte-mb6t29{margin:0px;background-color:var(--main);color:var(--main-text);font-family:var(--text-f);display:flex;flex-direction:column;transition-duration:200ms;letter-spacing:1px;min-height:100vh}p{margin:0px}h1, h2, h3, h4, h5, h6{margin:5px 0px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  $$unsubscribe_theme();
  return `<div class="${escape(null_to_empty(`body contents ${$theme ? "theme-dark" : "theme-light"}`), true) + " svelte-mb6t29"}">${validate_component(NavMenu, "NavMenu").$$render($$result, {}, {}, {})} <div class="content container svelte-mb6t29">${slots.default ? slots.default({}) : ``}</div> </div>`;
});
export {
  Layout as default
};

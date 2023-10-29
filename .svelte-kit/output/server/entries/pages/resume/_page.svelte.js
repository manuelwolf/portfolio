import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
import { C as Chip } from "../../../chunks/Chip.js";
import { C as CommonPage } from "../../../chunks/CommonPage.js";
import { R as RESUME } from "../../../chunks/params.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".resume.svelte-wl30ce.svelte-wl30ce{display:flex;justify-content:center;margin-top:20px}.resume.svelte-wl30ce>a.svelte-wl30ce{color:inherit}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { item, title } = RESUME;
  $$result.css.add(css);
  return `${validate_component(CommonPage, "CommonPage").$$render($$result, { title }, {}, {
    default: () => {
      return `<div class="resume svelte-wl30ce">${item ? `<a${add_attribute("href", item, 0)} class="svelte-wl30ce">${validate_component(Chip, "Chip").$$render($$result, { size: "1.25em" }, {}, {
        default: () => {
          return `Download`;
        }
      })}</a>` : `${validate_component(Chip, "Chip").$$render($$result, {}, {}, {
        default: () => {
          return `Ooops! no CV at the moment.`;
        }
      })}`}</div>`;
    }
  })}`;
});
export {
  Page as default
};

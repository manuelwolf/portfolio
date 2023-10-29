import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from "../../../../chunks/ssr.js";
import { C as CardLogo } from "../../../../chunks/CardLogo.js";
import { M as MainTitle } from "../../../../chunks/MainTitle.js";
import { b as base } from "../../../../chunks/paths.js";
import { a as getAssetURL } from "../../../../chunks/skills.params.js";
import { P as PROJECTS } from "../../../../chunks/params.js";
import { B as Banner, M as Markdown } from "../../../../chunks/Banner.js";
import { T as TabTitle } from "../../../../chunks/TabTitle.js";
import { C as Chip } from "../../../../chunks/Chip.js";
import { U as UIcon } from "../../../../chunks/UIcon.js";
import { C as CardDivider } from "../../../../chunks/CardDivider.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let computedTitle;
  let { data } = $$props;
  const { title } = PROJECTS;
  const screenshots = data.project?.screenshots ?? [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  computedTitle = data.project ? `${data.project.name} - ${title}` : title;
  return `${validate_component(TabTitle, "TabTitle").$$render($$result, { title: computedTitle }, {}, {})} <div class="pb-10 overflow-x-hidden col flex-1">${data.project === void 0 ? `<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-cube",
      classes: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-18mwztv">Could not load project data...</p></div>` : `<div class="flex flex-col items-center overflow-x-hidden">${validate_component(Banner, "Banner").$$render($$result, { img: getAssetURL(data.project.logo) }, {}, {
    default: () => {
      return `<div class="col-center p-y-20"><div class="text-0.9em">${validate_component(MainTitle, "MainTitle").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(data.project.name)}`;
        }
      })}</div> <p class="font-300 text-center text-[var(--tertiary-text)] m-y-2">${escape(data.project.type)}</p> <div class="w-75%">${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> <div class="row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2">${each(data.project.links, (item) => {
        return `${validate_component(Chip, "Chip").$$render($$result, { href: item.to }, {}, {
          default: () => {
            return `<div class="row-center gap-2">${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-link" }, {}, {})} <span>${escape(item.label)}</span></div> `;
          }
        })}`;
      })}</div> <div class="row-center flex-wrap m-b-2">${each(data.project.skills, (item) => {
        return `${validate_component(Chip, "Chip").$$render(
          $$result,
          {
            classes: "inline-flex flex-row items-center justify-center",
            href: `${base}/skills/${item.slug}`
          },
          {},
          {
            default: () => {
              return `${validate_component(CardLogo, "CardLogo").$$render(
                $$result,
                {
                  src: getAssetURL(item.logo),
                  alt: item.name,
                  radius: "0px",
                  size: 15,
                  classes: "mr-2"
                },
                {},
                {}
              )} <span class="text-[0.9em]">${escape(item.name)}</span> `;
            }
          }
        )}`;
      })}</div></div>`;
    }
  })} <div class="pt-3 pb-1 overflow-x-hidden w-full"><div class="px-10px m-y-5">${data.project.description ? `${validate_component(Markdown, "Markdown").$$render($$result, { content: data.project.description }, {}, {})}` : `<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-text-font",
      classes: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-1ugej71">No description</p></div>`}</div> <div class="w-100% m-t-8">${validate_component(CardDivider, "CardDivider").$$render($$result, {}, {}, {})}</div> ${screenshots.length > 0 ? `<div class="px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ">${each(screenshots, (item) => {
    return `<div class="col-center gap-3 overflow-hidden w-100% h-100% rounded-10px"><img class="aspect-video w-100%"${add_attribute("src", item.src, 0)}${add_attribute("alt", item.label, 0)}> <p class="text-[var(--tertiary-text)] font-300">${escape(item.label)}</p> </div>`;
  })}</div>` : `<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">${validate_component(UIcon, "UIcon").$$render(
    $$result,
    {
      icon: "i-carbon-image",
      classes: "text-3.5em"
    },
    {},
    {}
  )} <p class="font-300" data-svelte-h="svelte-s36p3y">No screenshots</p></div>`}</div></div>`}</div>`;
});
export {
  Page as default
};

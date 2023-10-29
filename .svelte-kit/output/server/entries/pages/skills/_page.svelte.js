import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "../../../chunks/ssr.js";
import { C as Card } from "../../../chunks/Card.js";
import { b as base } from "../../../chunks/paths.js";
import { d as SKILLS } from "../../../chunks/params.js";
import { S as SearchPage } from "../../../chunks/SearchPage.js";
import "@riadh-adrani/utils";
import { a as getAssetURL } from "../../../chunks/skills.params.js";
import { U as UIcon } from "../../../chunks/UIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { items, title } = SKILLS;
  let result = items;
  return `${validate_component(SearchPage, "SearchPage").$$render($$result, { title }, {}, {
    default: () => {
      return `${result.length === 0 ? `<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">${validate_component(UIcon, "UIcon").$$render(
        $$result,
        {
          icon: "i-carbon-cube",
          classes: "text-3.5em"
        },
        {},
        {}
      )} <p class="font-300" data-svelte-h="svelte-1jyyf6v">Could not find anything...</p></div>` : `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">${each(result, (skill) => {
        return `${validate_component(Card, "Card").$$render(
          $$result,
          {
            classes: ["cursor-pointer decoration-none"],
            tiltDegree: 1,
            href: `${base}/skills/${skill.slug}`,
            bgImg: getAssetURL(skill.logo)
          },
          {},
          {
            default: () => {
              return `<p class="text-[var(--tertiary-text)]">${escape(skill.name)}</p> `;
            }
          }
        )}`;
      })}</div>`}`;
    }
  })}`;
});
export {
  Page as default
};

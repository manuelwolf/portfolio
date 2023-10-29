import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as SEARCH } from "../../../chunks/params.js";
import { S as SearchPage } from "../../../chunks/SearchPage.js";
import { M as MY_EXPERIENCES } from "../../../chunks/experiences.params.js";
import { M as MY_PROJECTS } from "../../../chunks/projects.params.js";
import { M as MY_SKILLS } from "../../../chunks/skills.params.js";
import { U as UIcon } from "../../../chunks/UIcon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { title } = SEARCH;
  let query = "";
  let result = [];
  {
    {
      result = [];
      result.push(...MY_PROJECTS.filter((item) => query).map((data) => ({
        data,
        icon: "i-carbon-cube",
        name: data.name,
        to: `projects/${data.slug}`
      })));
      result.push(...MY_SKILLS.filter((item) => query).map((data) => ({
        data,
        icon: "i-carbon-software-resource-cluster",
        name: data.name,
        to: `skills/${data.slug}`
      })));
      result.push(...MY_EXPERIENCES.filter((item) => query).map((data) => ({
        data,
        icon: "i-carbon-development",
        name: `${data.name} @ ${data.company}`,
        to: `experience/${data.slug}`
      })));
    }
  }
  return `${validate_component(SearchPage, "SearchPage").$$render($$result, { title }, {}, {
    default: () => {
      return `<div class="flex flex-col items-stretch gap-10 p-2"></div> ${`<div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">${validate_component(UIcon, "UIcon").$$render(
        $$result,
        {
          icon: "i-carbon-search-locate-mirror",
          classes: "text-2em"
        },
        {},
        {}
      )} <span data-svelte-h="svelte-16h9bak">Try typing something...</span></div>`}`;
    }
  })}`;
});
export {
  Page as default
};

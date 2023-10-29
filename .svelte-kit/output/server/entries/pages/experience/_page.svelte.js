import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from "../../../chunks/ssr.js";
import { a as getTimeDiff, b as getMonthName, E as EXPERIENCES } from "../../../chunks/params.js";
import { C as Card } from "../../../chunks/Card.js";
import { C as CardLogo } from "../../../chunks/CardLogo.js";
import { C as CardTitle, a as ChipIcon } from "../../../chunks/ChipIcon.js";
import { a as getAssetURL } from "../../../chunks/skills.params.js";
import { b as base } from "../../../chunks/paths.js";
import { U as UIcon } from "../../../chunks/UIcon.js";
import { S as SearchPage } from "../../../chunks/SearchPage.js";
import "@riadh-adrani/utils";
const ExperienceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { experience } = $$props;
  const months = getTimeDiff(experience.period.from, experience.period.to);
  const from = `${getMonthName(experience.period.from.getMonth())} ${experience.period.from.getFullYear()}`;
  const to = experience.period.to ? `${getMonthName(experience.period.to.getMonth())} ${experience.period.to.getFullYear()}` : "Present";
  const period = `${from} - ${to} · ${months}`;
  if ($$props.experience === void 0 && $$bindings.experience && experience !== void 0)
    $$bindings.experience(experience);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      margin: "0px 0px 20px 0px",
      tiltDegree: 2,
      href: `${base}/experience/${experience.slug}`
    },
    {},
    {
      default: () => {
        return `<div class="col md:flex-row items-start gap-5 md:gap-1">${validate_component(CardLogo, "CardLogo").$$render(
          $$result,
          {
            src: getAssetURL(experience.logo),
            alt: experience.company,
            size: 75
          },
          {},
          {}
        )} <div class="col ml-0 md:ml-[20px] gap-3 w-full"><h3 class="flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center">${validate_component(CardTitle, "CardTitle").$$render($$result, { title: experience.name }, {}, {})}</h3> <div class="row flex-wrap m-b-2 gap-1 text-0.9em font-300">${validate_component(ChipIcon, "ChipIcon").$$render($$result, { name: `Company: ${experience.company}` }, {}, {
          default: () => {
            return `${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-building" }, {}, {})}`;
          }
        })} ${validate_component(ChipIcon, "ChipIcon").$$render($$result, { name: `Location: ${experience.location}` }, {}, {
          default: () => {
            return `${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-location" }, {}, {})}`;
          }
        })} ${validate_component(ChipIcon, "ChipIcon").$$render($$result, { name: `Contract: ${experience.contract}` }, {}, {
          default: () => {
            return `${validate_component(UIcon, "UIcon").$$render($$result, { icon: "i-carbon-hourglass" }, {}, {})}`;
          }
        })}</div> <div class="text-[var(--accent-text)] text-[0.9em] font-200">${escape(period)}</div> <div class="experience-description">${escape(experience.description)}</div> <div class="flex flex-row flex-wrap mt-5">${each(experience.skills, (skill) => {
          return `${validate_component(ChipIcon, "ChipIcon").$$render(
            $$result,
            {
              logo: getAssetURL(skill.logo),
              name: skill.name,
              href: `${base}/skills/${skill.slug}`
            },
            {},
            {}
          )}`;
        })}</div></div></div>`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { items, title } = EXPERIENCES;
  let result = [...items];
  return `${validate_component(SearchPage, "SearchPage").$$render($$result, { title }, {}, {
    default: () => {
      return `<div class="col items-center relative mt-10 flex-1">${result.length === 0 ? `<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">${validate_component(UIcon, "UIcon").$$render(
        $$result,
        {
          icon: "i-carbon-development",
          classes: "text-3.5em"
        },
        {},
        {}
      )} <p class="font-300" data-svelte-h="svelte-1jyyf6v">Could not find anything...</p></div>` : `<div class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"></div> ${each(result, (job, index) => {
        return `<div${add_attribute("class", `flex ${index % 2 !== 0 ? "flex-row" : "flex-row-reverse"} relative items-center w-full my-[10px]`, 0)}><div class="flex-1 hidden lg:flex"></div> <div class="hidden lg:inline p-15px bg-[var(--main)] rounded">${validate_component(UIcon, "UIcon").$$render(
          $$result,
          {
            icon: "i-carbon-condition-point",
            classes: ""
          },
          {},
          {}
        )}</div> <div class="flex-1 col items-stretch">${validate_component(ExperienceCard, "ExperienceCard").$$render($$result, { experience: job }, {}, {})}</div> </div>`;
      })}`}</div>`;
    }
  })}`;
});
export {
  Page as default
};

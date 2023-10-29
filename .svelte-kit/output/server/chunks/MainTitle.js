import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
const MainTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classes = "" } = $$props;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `<h1${add_attribute("class", `font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${classes}`, 0)} style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">${slots.default ? slots.default({}) : ``}</h1>`;
});
export {
  MainTitle as M
};

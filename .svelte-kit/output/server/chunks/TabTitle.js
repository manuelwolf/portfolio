import { c as create_ssr_component, e as escape } from "./ssr.js";
import { u as useTitle, T as TITLE_SUFFIX } from "./params.js";
const TabTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${$$result.head += `<!-- HEAD_svelte-gorrxo_START -->${$$result.title = `<title>${escape(useTitle(title, TITLE_SUFFIX))}</title>`, ""}<!-- HEAD_svelte-gorrxo_END -->`, ""}`;
});
export {
  TabTitle as T
};

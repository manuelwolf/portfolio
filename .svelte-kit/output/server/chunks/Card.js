import { c as null_to_empty } from "./utils.js";
import { c as create_ssr_component, a as add_attribute, e as escape, f as add_styles } from "./ssr.js";
import { i as is_void } from "./names.js";
import { changeColorOpacity } from "@riadh-adrani/utils";
const Card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-1441skb{--border-color:transparent;--bg-color:transparent;--drop-color:transparent;--bg-img:url();--drop-x:0;--drop-y:0;--rot-x:0;--rot-y:0;background:linear-gradient(90deg, var(--main) 0%, var(--main) 60%, var(--main-60) 100%), no-repeat right 40%/40% var(--bg-img)}.card-bg-img.svelte-1441skb:hover{background-color:var(--bg-color);background-image:radial-gradient(circle at var(--drop-x) var(--drop-y), var(--drop-color), transparent)}.card.svelte-1441skb:hover{transform:perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.01);border-color:var(--border-hover)}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let el;
  let { color = "#ffffff00" } = $$props;
  let { margin = "0px" } = $$props;
  let { tiltDegree = 5 } = $$props;
  let { classes = [] } = $$props;
  let { href = void 0 } = $$props;
  let { bgImg = void 0 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.tiltDegree === void 0 && $$bindings.tiltDegree && tiltDegree !== void 0)
    $$bindings.tiltDegree(tiltDegree);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.bgImg === void 0 && $$bindings.bgImg && bgImg !== void 0)
    $$bindings.bgImg(bgImg);
  $$result.css.add(css);
  changeColorOpacity(color, 0.5);
  changeColorOpacity(color, 0.15);
  changeColorOpacity(color, 0.01);
  return ` ${((tag) => {
    return tag ? `<${href ? "a" : "div"}${add_attribute("href", href, 0)} class="${escape(null_to_empty(`card text-inherit decoration-none inline-flex flex-col border-1px border-solid border-[var(--border)] rounded-15px duration relative ${classes.join(" ")}`), true) + " svelte-1441skb"}"${add_styles({ "bgColor": "red" })}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `<div class="card-bg-img flex-1 flex flex-col p-25px rounded-15px svelte-1441skb">${slots.default ? slots.default({}) : ``}</div> `}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}`;
});
export {
  Card as C
};

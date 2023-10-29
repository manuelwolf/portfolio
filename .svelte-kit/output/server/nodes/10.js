import * as universal from '../entries/pages/skills/_slug_/_page.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/skills/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/skills/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/10.bdd7b7e3.js","_app/immutable/chunks/params.5ae45fbb.js","_app/immutable/chunks/paths.bd02d7c0.js","_app/immutable/chunks/scheduler.bdaa4df1.js","_app/immutable/chunks/index.49b0a900.js","_app/immutable/chunks/UIcon.62d4f51d.js","_app/immutable/chunks/CardDivider.17768ba4.js","_app/immutable/chunks/CardLogo.4aa36c7b.js","_app/immutable/chunks/MainTitle.de67ff74.js","_app/immutable/chunks/Banner.23289a82.js","_app/immutable/chunks/TabTitle.07c1feb7.js","_app/immutable/chunks/Chip.26077c47.js"];
export const stylesheets = ["_app/immutable/assets/Banner.79dec521.css"];
export const fonts = [];

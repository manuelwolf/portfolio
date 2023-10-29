

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/search/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.f3d97f5b.js","_app/immutable/chunks/scheduler.bdaa4df1.js","_app/immutable/chunks/index.49b0a900.js","_app/immutable/chunks/UIcon.62d4f51d.js","_app/immutable/chunks/paths.1dcded33.js","_app/immutable/chunks/params.352303bf.js","_app/immutable/chunks/SearchPage.3eb2584b.js","_app/immutable/chunks/CommonPage.a4b6cc3c.js","_app/immutable/chunks/MainTitle.de67ff74.js","_app/immutable/chunks/TabTitle.9672f816.js","_app/immutable/chunks/Chip.0696ab9f.js"];
export const stylesheets = ["_app/immutable/assets/SearchPage.d63b558a.css"];
export const fonts = [];

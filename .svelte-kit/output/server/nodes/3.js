

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experience/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e61c86c3.js","_app/immutable/chunks/scheduler.bdaa4df1.js","_app/immutable/chunks/index.49b0a900.js","_app/immutable/chunks/UIcon.62d4f51d.js","_app/immutable/chunks/params.5ae45fbb.js","_app/immutable/chunks/paths.bd02d7c0.js","_app/immutable/chunks/Card.a53f564d.js","_app/immutable/chunks/TabTitle.07c1feb7.js","_app/immutable/chunks/index.97b3c5e0.js","_app/immutable/chunks/CardLogo.4aa36c7b.js","_app/immutable/chunks/ChipIcon.3da2cfbb.js","_app/immutable/chunks/SearchPage.5fd167ef.js","_app/immutable/chunks/CommonPage.dcb503fa.js","_app/immutable/chunks/MainTitle.de67ff74.js"];
export const stylesheets = ["_app/immutable/assets/Card.7a6abfc5.css","_app/immutable/assets/ChipIcon.b03ae438.css","_app/immutable/assets/SearchPage.d63b558a.css"];
export const fonts = [];

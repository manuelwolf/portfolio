

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c2854f7d.js","_app/immutable/chunks/scheduler.bdaa4df1.js","_app/immutable/chunks/index.49b0a900.js","_app/immutable/chunks/stores.9b582bed.js","_app/immutable/chunks/singletons.a14c527b.js","_app/immutable/chunks/paths.1dcded33.js"];
export const stylesheets = [];
export const fonts = [];

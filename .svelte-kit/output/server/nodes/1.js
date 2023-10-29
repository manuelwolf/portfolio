

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.dcafc573.js","_app/immutable/chunks/scheduler.bdaa4df1.js","_app/immutable/chunks/index.49b0a900.js","_app/immutable/chunks/stores.84b166cb.js","_app/immutable/chunks/singletons.24ae591d.js","_app/immutable/chunks/paths.bd02d7c0.js"];
export const stylesheets = [];
export const fonts = [];

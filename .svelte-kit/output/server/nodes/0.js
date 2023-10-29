import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.ffa78a24.js","_app/immutable/chunks/scheduler.bdaa4df1.js","_app/immutable/chunks/index.49b0a900.js","_app/immutable/chunks/UIcon.62d4f51d.js","_app/immutable/chunks/stores.9b582bed.js","_app/immutable/chunks/singletons.a14c527b.js","_app/immutable/chunks/paths.1dcded33.js","_app/immutable/chunks/params.352303bf.js"];
export const stylesheets = ["_app/immutable/assets/0.dab7b8ad.css"];
export const fonts = [];

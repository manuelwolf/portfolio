import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.e34a2630.js","_app/immutable/chunks/scheduler.bdaa4df1.js","_app/immutable/chunks/index.49b0a900.js","_app/immutable/chunks/UIcon.62d4f51d.js","_app/immutable/chunks/stores.84b166cb.js","_app/immutable/chunks/singletons.24ae591d.js","_app/immutable/chunks/paths.bd02d7c0.js","_app/immutable/chunks/params.5ae45fbb.js"];
export const stylesheets = ["_app/immutable/assets/0.8c647bc1.css"];
export const fonts = [];

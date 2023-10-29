import { w as writable } from "./index.js";
import { b as base } from "./paths.js";
const theme = writable(false);
const gh = (file) => `${base}/logos/${file}`;
const a = (light, dark) => dark ? { dark: gh(dark), light: gh(light) } : gh(light);
const Assets = {
  AWS: a("aws.svg"),
  Bootstrap: a("bootstrap.svg"),
  C: a("c.svg"),
  Cpp: a("cpp.svg"),
  Celery: a("celery.svg"),
  Django: a("django.svg"),
  FastApi: a("fastapi"),
  Flask: a("flask.svg"),
  Go: a("go.svg"),
  Kafka: a("kafka.svg"),
  Neo4j: a("neo4j.svg"),
  Nginx: a("nginx.svg"),
  Numpy: a("numpy.svg"),
  Pandas: a("pandas.svg"),
  RabbitMQ: a("rabbitmq.svg"),
  Rust: a("rust.svg", "rust-dark.png"),
  Scrapy: a("scrapy.png"),
  Selenium: a("selenium.svg"),
  Docker: a("docker.svg"),
  Kubernetes: a("kubernetees.svg"),
  Csharp: a("csharp.svg"),
  Xamarin: a("xamarin.svg"),
  TypeScript: a("ts.png"),
  VueJs: a("vue.png"),
  ReactJs: a("react.svg"),
  Dart: a("dart.png"),
  Kotlin: a("kotlin.png"),
  Python: a("python.png"),
  NodeJs: a("node.png"),
  Deno: a("deno.png", "deno-dark.png"),
  Svelte: a("svelte.png"),
  ExpressJs: a("express.png"),
  JavaScript: a("js.png"),
  Fastify: a("fastify.svg", "fastify-dark.png"),
  NestJs: a("nest.svg"),
  Quasar: a("quasar.svg"),
  SolidJs: a("solid.svg"),
  Electron: a("electron.png"),
  Flutter: a("flutter.svg"),
  Java: a("java.png"),
  AdonisJs: a("adonis.png"),
  Android: a("android.png"),
  Angular: a("angular.png"),
  PostgreSQL: a("postgres.png"),
  Firebase: a("firebase.png"),
  Sass: a("sass.png"),
  Unknown: a("no-img.svg"),
  MongoDB: a("mongodb.svg"),
  Redis: a("redis.svg"),
  Tailwind: a("tailwind.svg"),
  HTML: a("html.svg"),
  Premiere: a("premiere.svg"),
  Photoshop: a("photoshop.svg"),
  CSS: a("css.svg"),
  AfterEffects: a("after-effects.svg"),
  Illustrator: a("illustrator.svg"),
  Nuxt: a("nuxt.png"),
  Vite: a("vite.png"),
  Vitest: a("vitest.svg"),
  Jest: a("jest.png"),
  Unocss: a("unocss.svg"),
  Ruvy: a("ruvy.svg"),
  Postcss: a("postcss.svg")
};
let currentTheme;
theme.subscribe((v) => currentTheme = v);
const getAssetURL = (asset) => {
  return typeof asset === "string" ? asset : currentTheme ? asset.dark : asset.light;
};
const svelte = "Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.\n\nThe compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.\n\n```tsx\n<script>\n    let count = 1;\n    $: doubled = count * 2;\n<\/script>\n\n<p>{count} * 2 = {doubled}</p>\n\n<button on:click={() => count = count + 1}>Count</button>\n```\n";
const s = (skill) => skill;
const MY_SKILLS = [
  s({
    slug: "js",
    color: "yellow",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.JavaScript,
    name: "Javascript"
  }),
  s({
    slug: "ts",
    color: "blue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.TypeScript,
    name: "Typescript"
  }),
  s({
    slug: "css",
    color: "blue",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.CSS,
    name: "CSS"
  }),
  s({
    slug: "html",
    color: "orange",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.HTML,
    name: "HTML"
  }),
  s({
    slug: "sass",
    color: "pink",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.Sass,
    name: "Sass"
  }),
  s({
    slug: "reactjs",
    color: "cyan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.",
    logo: Assets.ReactJs,
    name: "React Js"
  }),
  s({
    slug: "svelte",
    color: "orange",
    description: svelte,
    logo: Assets.Svelte,
    name: "Svelte"
  })
];
const getSkills = (...slugs) => MY_SKILLS.filter((it) => slugs.includes(it.slug));
export {
  Assets as A,
  MY_SKILLS as M,
  getAssetURL as a,
  getSkills as g,
  theme as t
};

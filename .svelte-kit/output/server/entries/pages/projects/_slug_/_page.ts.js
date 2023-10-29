import { M as MY_PROJECTS } from "../../../../chunks/projects.params.js";
function load({ params }) {
  if (params.slug) {
    const project = MY_PROJECTS.find((item) => {
      return item.slug === params.slug;
    });
    return { project };
  }
}
export {
  load
};

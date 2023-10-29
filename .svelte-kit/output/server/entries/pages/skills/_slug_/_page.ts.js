import { M as MY_SKILLS } from "../../../../chunks/skills.params.js";
function load({ params }) {
  if (params.slug) {
    const skill = MY_SKILLS.find((item) => {
      return item.slug === params.slug;
    });
    return { skill };
  }
}
export {
  load
};

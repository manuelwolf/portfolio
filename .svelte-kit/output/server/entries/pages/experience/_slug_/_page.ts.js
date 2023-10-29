import { M as MY_EXPERIENCES } from "../../../../chunks/experiences.params.js";
function load({ params }) {
  if (params.slug) {
    const experience = MY_EXPERIENCES.find((item) => {
      return item.slug === params.slug;
    });
    return { experience };
  }
}
export {
  load
};

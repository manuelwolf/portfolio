import { g as getSkills, A as Assets } from "./skills.params.js";
var Platform = /* @__PURE__ */ ((Platform2) => {
  Platform2["GitHub"] = "github";
  Platform2["StackOverflow"] = "stackoverflow";
  Platform2["Twitter"] = "twitter";
  Platform2["Linkedin"] = "linkedin";
  Platform2["Email"] = "email";
  Platform2["Facebook"] = "facebook";
  Platform2["Youtube"] = "youtube";
  return Platform2;
})(Platform || {});
var ContractType = /* @__PURE__ */ ((ContractType2) => {
  ContractType2["FullTime"] = "Full-time";
  ContractType2["PartTime"] = "Part-time";
  ContractType2["SelfEmployed"] = "Self-employed";
  ContractType2["Freelance"] = "Freelance";
  ContractType2["Contract"] = "Contract";
  ContractType2["Internship"] = "Internship";
  return ContractType2;
})(ContractType || {});
const MY_EXPERIENCES = [
  {
    slug: "open-sourcer",
    company: "Self-employed",
    description: "Creating awesome tools for developers.",
    contract: ContractType.SelfEmployed,
    type: "Software Development",
    location: "Home",
    period: { from: new Date() },
    skills: getSkills("ts", "js"),
    name: "Open Source Developer",
    color: "#ffffff",
    links: [],
    logo: Assets.Unknown,
    shortDescription: ""
  },
  {
    slug: "software-freelance",
    company: "Self-employed",
    description: "Creating awesome applications for customers.",
    contract: ContractType.Freelance,
    type: "Software Development",
    location: "Home",
    period: { from: new Date() },
    skills: getSkills("svelte", "ts", "sass", "css", "html", "js"),
    name: "Freelancer",
    color: "#ffffff",
    links: [],
    logo: Assets.Unknown,
    shortDescription: ""
  },
  {
    slug: "software-freelance-junior",
    company: "Self-employed",
    description: "Creating awesome applications for customers.",
    contract: ContractType.Freelance,
    type: "Software Development",
    location: "Home",
    period: { from: new Date(2022, 0, 1), to: new Date() },
    skills: getSkills("css", "html", "js"),
    name: "Junior Freelancer",
    color: "#ffffff",
    links: [],
    logo: Assets.Unknown,
    shortDescription: ""
  }
];
export {
  MY_EXPERIENCES as M,
  Platform as P
};

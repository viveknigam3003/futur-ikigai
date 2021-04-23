import Hints from "./Hints";

const IdeaBoxes = (combos) => [
  {
    title: "Tangible",
    subtitle: "Anything percieved by physical touch",
    infoTitle: "Some examples of tangible things are:",
    infoContent: Hints.tangible,
    placeholder: `An idea of a tangible product with ${combos[0]} and ${combos[1]}, and try to incorporate ${combos[2]} to it.`,
  },
  {
    title: "Digital",
    subtitle: "Website, application and others",
    infoTitle: "Some examples of digital products maybe:",
    infoContent: Hints.digital,
    placeholder: `An idea of a digital product with ${combos[0]} and ${combos[1]}, and try to incorporate ${combos[2]} to it.`,
  },
  {
    title: "Service",
    subtitle: "Helping with your services",
    infoTitle: "Some hints for Service-based ideas are:",
    infoContent: Hints.service,
    placeholder: `An idea of a service with ${combos[0]} and ${combos[1]}, and try to incorporate ${combos[2]} to it.`,
  },
];

export default IdeaBoxes;

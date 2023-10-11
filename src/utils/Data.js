import { FaReact, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiHtml5 } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiKrita,
  SiCanva,
} from "react-icons/si";
import { BiLogoBlender } from "react-icons/bi";

import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";

export const Skills = [
  {
    id: 0,
    tech: "React JS",
    icon: <FaReact />,
  },
  {
    id: 1,
    tech: "Next JS",
    icon: <TbBrandNextjs />,
  },
  {
    id: 3,
    tech: "Html",
    icon: <SiHtml5 />,
  },
  {
    id: 4,
    tech: "JS",
    icon: <SiJavascript />,
  },
  {
    id: 2,
    tech: "Css",
    icon: <FaCss3Alt />,
  },
  {
    id: 5,
    tech: "Git Hub",
    icon: <FaGithub />,
  },
];

export const Skillsillustration = [
  {
    id: 1,
    tech: "Illustrator",
    icon: <SiAdobeillustrator />,
  },
  {
    id: 2,
    tech: "After Effects",
    icon: <SiAdobeaftereffects />,
  },
  {
    id: 3,
    tech: "Blender",
    icon: <BiLogoBlender />,
  },
  {
    id: 4,
    tech: "Premier",
    icon: <SiAdobepremierepro />,
  },
  {
    id: 5,
    tech: "Krita",
    icon: <SiKrita />,
  },
  {
    id: 6,
    tech: "Canva",
    icon: <SiCanva />,
  },
];

export const projectDetails = [
  {
    id: 0,
    project_name: "NivaGo",
    project_desc:
      "This Hotel Booking Page was developed using filters where the client can select according to their needs.",
    tech_stack: ["Next JS", "CSS", "JS"],
    project_Img: Project1,
    project_url: "https://migracion-hotels.vercel.app/",
    reverse: false,
  },
  {
    id: 1,
    project_name: "Swipe",
    project_desc:
      "This website was a project that I developed within the devTools Academy Bootcamp",
    tech_stack: ["HTML", "CSS"],
    project_Img: Project2,
    project_url: "https://swipe-three.vercel.app/",
    reverse: false,
  },
];

export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "Home",
  },
  {
    id: 1,
    name: "My Skills",
    href: "Skills",
  },
  {
    id: 2,
    name: "My Projects",
    href: "Projects",
  },
  {
    id: 3,
    name: "Contact",
    href: "Contact",
  },

  
];

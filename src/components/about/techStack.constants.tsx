import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNestjs } from "react-icons/si";
import ZustandIcon from "../../assets/zustand.svg";

import type { Tech } from "../../types/Tech";

export const TECH_STACK: Tech[] = [
  {
    name: "React",
    icon: <FaReact className="w-4 h-4" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="w-4 h-4" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-4 h-4" />,
  },
  {
    name: "NestJS",
    icon: <SiNestjs className="w-4 h-4" />,
  },
  {
    name: "Zustand",
    icon: <img src={ZustandIcon} className="w-4 h-4" alt="Zustand" />,
  },
];
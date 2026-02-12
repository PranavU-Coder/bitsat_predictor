import srihari from "@/assets/team/Golden-purple.png";
import pranav from "@/assets/team/PranavU-Coder.png";

export type TeamMemberProps = {
  image: string;
  name: string;
  role: string;
  githubLink: string;
  description: string;
};

export const TEAM_MEMBERS: TeamMemberProps[] = [
  {
    image: pranav,
    name: "Pranav",
    role: "Lead",
    githubLink: "https://github.com/PranavU-Coder",
    description:
      "Progenitor of the idea, created the ML-model for predictions and contributed to the website.",
  },
  {
    image: srihari,
    name: "Golden Purple",
    role: "Co-Lead",
    githubLink: "https://github.com/Golden-purple",
    description: "Helped in model-tuning and creator of the website.",
  },
] as const;

export interface PlotParams {
  data?: any[];
  layout?: any;
  config?: any;
  frames?: any[];
  revision?: number;
  style?: React.CSSProperties;
  className?: string;
  useResizeHandler?: boolean;
  onInitialized?: (figure: any) => void;
  onUpdate?: (figure: any) => void;
  onRelayout?: (event: any) => void;
  onClick?: (event: any) => void;
}

export const gotoButtonStyle =
  "m-1 cursor-pointer bg-purple-800 border-2 text-black border-purple-950 w-[40px] h-[40px] rounded-xl flex justify-center items-center enabled:hover:bg-purple-600 enabled:active:bg-purple-800 disabled:transition-opacity disabled:opacity-60 active:transition-color hover:transition-color enabled:transition-opacity disabled:cursor-default";

export const submitButtonStyle =
  "m-2 cursor-pointer bg-purple-800 border-2 border-purple-950 hover:bg-purple-600 hover:transition active:bg-purple-900 active:transition w-[150px] h-[40px] rounded-xl";

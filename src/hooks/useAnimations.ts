import { useSetOffset } from "./useSetOffset";

export const useAnimations = () => {
  const offset = useSetOffset();
  return {
    opTrans: {
      classes: "opacity-0 translate-y-10 blur-lg",
      arrClases: ["opacity-0", "translate-y-10", "blur-lg"],
    },
    opacity: {
      classes: "opacity-0 blur-lg",
      arrClasses: ["opacity-0", "blur-lg"],
    },
    scale: {
      classes: "opacity-0 scale-0 blur-lg",
      arrClasses: ["opacity-0", "scale-0", "blur-lg"],
    },
    viewport: {
      margin: `0px 0px -${offset}px 0px`,
    },
  };
};

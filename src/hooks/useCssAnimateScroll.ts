import { useEffect, useRef, useState } from "react";
import { useAnimations } from "./useAnimations";

export const useCssAnimateScroll = () => {
  const refEl = useRef(null);
  const [animated, setAnimated] = useState("");
  const animations = useAnimations();
  useEffect(() => {
    const observerOps = { rootMargin: animations.viewport.margin };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimated("animated");
          observer.unobserve(entry.target);
        }
      });
    }, observerOps);

    const curr = refEl.current;
    if (curr) {
      observer.observe(curr);
    }

    return () => {
      if (curr) {
        observer.unobserve(curr);
      }
    };
  }, []);

  return [refEl, animated];
};

import { useEffect, useRef, useState } from "react";
import { useAnimations } from "./useAnimations";

export const useCssAnimateMultipleScroll = <T extends HTMLElement>(
  arrLength: number
): [React.MutableRefObject<(T | null)[]>, string[]] => {
  const refsEl = useRef<(T | null)[]>([...Array(arrLength)].map(() => null));
  const [animated, setAnimated] = useState<string[]>(Array(arrLength).fill(""));
  const animations = useAnimations();
  useEffect(() => {
    const observerOps = { rootMargin: animations.viewport.margin };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = refsEl.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setAnimated((prevAnimated) => {
              const newAnimated = [...prevAnimated];
              newAnimated[index] = "animated";
              return newAnimated;
            });
            observer.unobserve(entry.target);
          }
        }
      });
    }, observerOps);

    const curr = refsEl.current;
    curr.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      curr.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  return [refsEl, animated];
};

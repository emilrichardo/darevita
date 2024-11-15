import { useEffect, useState } from "react";

export const useSetOffset = () => {
  const [offset, setOffset] = useState(120);
  useEffect(() => {
    const handleResize = () => {
      setOffset(window.innerWidth > 1080 ? 360 : 120);
    };
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        handleResize();
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  return offset;
};

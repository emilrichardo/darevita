import { useState, useEffect } from "react";

export const useRegisterLink = () => {
  const [sponsor, setSponsor] = useState("admin");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sp = urlParams.get("sp");
    if (sp) {
      setSponsor(sp);
    }
  }, []);

  return `https://staging.mynjos.com/register/${sponsor}`;
};

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Rola até o personagem certo quando um link de história aponta para #personagem-<id>. */
const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const el = document.getElementById(hash.slice(1));
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("ring-2", "ring-fundo-da-grota-orange");
    const timeout = setTimeout(() => el.classList.remove("ring-2", "ring-fundo-da-grota-orange"), 2000);

    return () => clearTimeout(timeout);
  }, [hash]);

  return null;
};

export default ScrollToHash;

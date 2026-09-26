import { useEffect, useState } from "react";
import { Flame, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeName = "default" | "lilac";

const STORAGE_KEY = "fundo-da-grota-theme";

function applyTheme(theme: ThemeName) {
  if (theme === "lilac") {
    document.documentElement.setAttribute("data-theme", "lilac");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

/** Barra fixa no rodapé (todas as páginas) para trocar a paleta de cores do site. Escolha persiste em localStorage. */
const ThemeToggleBar = () => {
  const [theme, setTheme] = useState<ThemeName>("default");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "lilac" || saved === "default") {
      setTheme(saved);
      applyTheme(saved);
    }
  }, []);

  const escolher = (novo: ThemeName) => {
    setTheme(novo);
    applyTheme(novo);
    localStorage.setItem(STORAGE_KEY, novo);
  };

  return (
    <div className="barra-paleta">
      <span className="barra-paleta-rotulo">Paleta:</span>

      <button
        type="button"
        onClick={() => escolher("default")}
        aria-pressed={theme === "default"}
        className={cn(
          "botao-paleta",
          theme === "default" ? "chip-ativo" : "chip-inativo"
        )}
      >
        <Flame className="icone-mini" />
        Padrão
      </button>

      <button
        type="button"
        onClick={() => escolher("lilac")}
        aria-pressed={theme === "lilac"}
        className={cn(
          "botao-paleta",
          theme === "lilac" ? "chip-lilas-ativo" : "chip-lilas-inativo"
        )}
      >
        <Sparkles className="icone-mini" />
        Lilás / Roxo
      </button>
    </div>
  );
};

export default ThemeToggleBar;

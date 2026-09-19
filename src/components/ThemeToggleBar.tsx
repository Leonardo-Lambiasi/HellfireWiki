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
    <div className="fixed bottom-0 left-0 right-0 md:left-64 z-40 flex items-center justify-center gap-2 sm:gap-3 py-2.5 px-4 bg-fundo-da-grota-charcoal/95 border-t-2 border-fundo-da-grota-orange/40 backdrop-blur-sm">
      <span className="text-xs text-muted-foreground hidden sm:inline mr-1">Paleta:</span>

      <button
        type="button"
        onClick={() => escolher("default")}
        aria-pressed={theme === "default"}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
          theme === "default"
            ? "border-fundo-da-grota-orange bg-fundo-da-grota-orange/20 text-fundo-da-grota-gold"
            : "border-fundo-da-grota-ash/60 text-muted-foreground hover:border-fundo-da-grota-orange/50 hover:text-foreground"
        )}
      >
        <Flame className="w-3.5 h-3.5" />
        Padrão
      </button>

      <button
        type="button"
        onClick={() => escolher("lilac")}
        aria-pressed={theme === "lilac"}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
          theme === "lilac"
            ? "border-[#A855F7] bg-[#A855F7]/20 text-[#D8B4FE]"
            : "border-fundo-da-grota-ash/60 text-muted-foreground hover:border-[#A855F7]/50 hover:text-foreground"
        )}
      >
        <Sparkles className="w-3.5 h-3.5" />
        Lilás / Roxo
      </button>
    </div>
  );
};

export default ThemeToggleBar;

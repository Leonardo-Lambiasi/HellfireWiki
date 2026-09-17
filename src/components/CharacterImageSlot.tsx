import { ImageOff } from "lucide-react";

interface CharacterImageSlotProps {
  imagem?: string;
  nome: string;
  icon?: string;
  size?: "sm" | "lg";
}

const SIZE_CLASSES: Record<NonNullable<CharacterImageSlotProps["size"]>, string> = {
  sm: "w-20 h-20",
  lg: "w-28 sm:w-40 md:w-56 aspect-square",
};

/** Card de imagem do personagem — pronto para receber `imagem`, sem exigir uma agora. */
const CharacterImageSlot = ({ imagem, nome, icon, size = "sm" }: CharacterImageSlotProps) => (
  <div
    className={`${SIZE_CLASSES[size]} shrink-0 rounded-lg border-2 border-dashed border-fundo-da-grota-ash/60 bg-fundo-da-grota-charcoal/40 flex items-center justify-center overflow-hidden`}
  >
    {imagem ? (
      <img src={imagem} alt={nome} className="w-full h-full object-cover" />
    ) : (
      <div className="flex flex-col items-center gap-1 text-muted-foreground/60">
        {icon ? <span className={size === "lg" ? "text-5xl" : "text-2xl"}>{icon}</span> : <ImageOff className="w-5 h-5" />}
        <span className="text-[10px] uppercase tracking-wide">Sem imagem</span>
      </div>
    )}
  </div>
);

export default CharacterImageSlot;

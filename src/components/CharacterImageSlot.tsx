import { ImageOff } from "lucide-react";

interface CharacterImageSlotProps {
  imagem?: string;
  nome: string;
  icon?: string;
  size?: "sm" | "lg";
}

const SIZE_CLASSES: Record<NonNullable<CharacterImageSlotProps["size"]>, string> = {
  sm: "espaco-imagem-pequeno",
  lg: "espaco-imagem-grande",
};

/** Card de imagem do personagem — pronto para receber `imagem`, sem exigir uma agora. */
const CharacterImageSlot = ({ imagem, nome, icon, size = "sm" }: CharacterImageSlotProps) => (
  <div
    className={`espaco-imagem ${SIZE_CLASSES[size]}`}
  >
    {imagem ? (
      <img src={imagem} alt={nome} className="espaco-imagem-foto" />
    ) : (
      <div className="espaco-imagem-vazio">
        {icon ? <span className="espaco-imagem-emoji">{icon}</span> : <ImageOff className="icone-medio" />}
        <span className="espaco-imagem-legenda">Sem imagem</span>
      </div>
    )}
  </div>
);

export default CharacterImageSlot;

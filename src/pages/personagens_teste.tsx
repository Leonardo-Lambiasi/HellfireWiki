import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import HeroCarousel from "@/components/HeroCarousel";

const TOTAL_HEROIS = 7;

const PersonagensTeste = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="pagina pagina-espacada">
      <PageHeader
        titulo="Roleta de Heróis"
        descricao="Protótipo da vitrine de personagens — em construção"
      />
      <HeroCarousel total={TOTAL_HEROIS} active={active} onChange={setActive} />
    </div>
  );
};

export default PersonagensTeste;

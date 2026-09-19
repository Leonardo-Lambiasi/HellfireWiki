import PageHeader from "@/components/PageHeader";
import HeroCarousel from "@/components/HeroCarousel";

const PersonagensTeste = () => (
  <div className="space-y-10 animate-fade-in-up">
    <PageHeader
      titulo="Roleta de Heróis"
      descricao="Protótipo da vitrine de personagens — em construção"
    />
    <HeroCarousel />
  </div>
);

export default PersonagensTeste;

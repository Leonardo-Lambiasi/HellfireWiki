import { Flame, Users, BookOpen, Calendar, Scroll } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import type { LucideIcon } from "lucide-react";

interface SobreSection {
  icon: LucideIcon;
  titulo: string;
  conteudo: string;
  destaque?: boolean;
}

const sections: SobreSection[] = [
  {
    icon: Flame,
    titulo: "A Campanha",
    conteudo:
      "Hellfire é uma campanha de D&D 5e ambientada em Ark, um mundo à beira do colapso infernal. Três aventureiros descobrem que seus destinos estão entrelaçados com uma profecia milenar — e que as escolhas que fazem determinarão se Ark sobrevive ou perece nas chamas eternas.",
    destaque: true,
  },
  {
    icon: Users,
    titulo: "A Mesa",
    conteudo:
      "Grupo de 6 jogadores. Sessões semanais. Tone: drama sério com momentos de humor orgânico. Mortes de personagem são possíveis mas raramente arbitrárias — o mundo reage às escolhas dos jogadores.",
  },
  {
    icon: BookOpen,
    titulo: "Sistema",
    conteudo:
      "Dungeons & Dragons 5ª Edição com algumas regras da casa: dados de vida máximos no nível 1, pontos de inspiração concedidos por roleplay notável, e morte permanente com falha crítica em 3 death saves consecutivos.",
  },
  {
    icon: Calendar,
    titulo: "Regras de Mesa",
    conteudo:
      "Avisar ausência com antecedência. Personagem ausente entra em modo 'background' (não morre, não age). Telefone no silencioso durante cenas dramáticas. Sessão zero obrigatória para novos jogadores. Metagaming moderado é ok, metagaming intenso não.",
  },
  {
    icon: Scroll,
    titulo: "Convenções de Lore",
    conteudo:
      "Esta wiki é o registro oficial da campanha. Datas in-game seguem o calendário de Ark (Luas Carmesim, Negra e Prateada). Eventos retcon são marcados com [RETCON]. O Mestre tem palavra final em ambiguidades de lore.",
  },
];

const Sobre = () => (
  <div className="space-y-8 animate-fade-in-up">
    <PageHeader
      titulo="Sobre"
      descricao="A campanha, as regras e o mundo de Ark"
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {sections.map((section, i) => (
        <Card key={i} className={section.destaque ? "lg:col-span-2" : ""}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-hellfire-gold">
              <section.icon className="w-5 h-5 text-hellfire-orange" />
              {section.titulo}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{section.conteudo}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default Sobre;

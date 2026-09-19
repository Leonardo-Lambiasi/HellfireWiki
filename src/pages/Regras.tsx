import { useState, useEffect, useRef } from "react";
import PageHeader from "@/components/PageHeader";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Entrada { nome: string; tag?: string; descricao: string; bullets?: string[]; fonte?: string }
interface ArmaTbl  { nome: string; dano: string; props: string; maestria: string; peso: string; custo: string }
interface RegrasCasa { titulo: string; icon: string; descricao: string; bullets?: string[] }

type Tab = "atributos" | "combate" | "movimento" | "condicoes" | "ambiente" | "dominio" | "armas" | "mesa";

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "atributos", label: "Atributos",  icon: "📚" },
  { id: "combate",   label: "Combate",    icon: "⚔️" },
  { id: "movimento", label: "Movimento",  icon: "🏃" },
  { id: "condicoes", label: "Condições",  icon: "🤕" },
  { id: "ambiente",  label: "Ambiente",   icon: "🌍" },
  { id: "dominio",   label: "Domínio",    icon: "🎯" },
  { id: "armas",     label: "Armas",      icon: "🗡️" },
  { id: "mesa",      label: "Regras da Mesa", icon: "📜" },
];

// ─── Atributos ────────────────────────────────────────────────────────────────

interface AtribGrupo { atributo: string; cor: string; pericias: Entrada[] }

const ATRIBUTOS: AtribGrupo[] = [
  {
    atributo: "Força", cor: "border-red-700",
    pericias: [
      { nome: "Força", tag: "Atributo", descricao: "Mede potência física, força bruta e capacidade de levantar, empurrar e quebrar objetos.", bullets: ["Forçar portas emperradas ou trancadas", "Libertar-se de amarras", "Tombar estátuas ou segurar grandes objetos"], fonte: "LDJ pg. 175" },
      { nome: "Atletismo", tag: "Perícia de Força", descricao: "Situações difíceis ao escalar, saltar ou nadar.", bullets: ["Escalar superfícies perigosas ou escorregadias", "Saltos de distância ou altura excepcionais", "Nadar em corredeiras ou áreas com algas espessas"], fonte: "LDJ pg. 175" },
    ],
  },
  {
    atributo: "Destreza", cor: "border-green-700",
    pericias: [
      { nome: "Destreza", tag: "Atributo", descricao: "Mede agilidade, reflexos e equilíbrio.", bullets: ["Controlar carruagem em ladeira", "Abrir fechaduras ou desarmar armadilhas", "Tocar instrumento de cordas"], fonte: "LDJ pg. 177" },
      { nome: "Acrobacia", tag: "Perícia de Destreza", descricao: "Permanecer de pé em situações complicadas e realizar acrobacias.", bullets: ["Correr sobre gelo ou equilibrar em corda bamba", "Saltos mortais e cambalhotas"], fonte: "LDJ pg. 176" },
      { nome: "Furtividade", tag: "Perícia de Destreza", descricao: "Esconder-se, esgueirar-se por guardas ou aproximar-se sem ser detectado.", fonte: "LDJ pg. 176" },
      { nome: "Prestidigitação", tag: "Perícia de Destreza", descricao: "Atos de trapaça manual e pequenos furtos.", bullets: ["Plantar ou esconder objetos na roupa de alguém", "Roubar bolsa de moedas ou pegar algo do bolso alheio"], fonte: "LDJ pg. 176" },
    ],
  },
  {
    atributo: "Constituição", cor: "border-orange-700",
    pericias: [
      { nome: "Constituição", tag: "Atributo", descricao: "Mede saúde, resistência e força vital. Testes são incomuns e representam ir além dos limites.", bullets: ["Segurar a respiração", "Marchar ou trabalhar sem descanso por horas", "Sobreviver sem comida ou água"], fonte: "LDJ pg. 177" },
    ],
  },
  {
    atributo: "Inteligência", cor: "border-blue-700",
    pericias: [
      { nome: "Inteligência", tag: "Atributo", descricao: "Mede acuidade mental, memória e raciocínio lógico.", bullets: ["Comunicar-se sem palavras", "Estimar valor de itens preciosos", "Forjar documentos ou disfarces"], fonte: "LDJ pg. 177" },
      { nome: "Arcanismo",   tag: "Perícia de Int.", descricao: "Conhecimento sobre magias, itens mágicos, símbolos, tradições e planos de existência.", fonte: "PHB pg. 177" },
      { nome: "História",    tag: "Perícia de Int.", descricao: "Eventos históricos, pessoas lendárias, reinos antigos e civilizações perdidas.", fonte: "PHB pg. 177" },
      { nome: "Investigação",tag: "Perícia de Int.", descricao: "Procurar pistas, fazer deduções e encontrar objetos escondidos.", bullets: ["Deduzir a localização de algo escondido", "Discernir tipo de arma por ferimento", "Decifrar pergaminhos antigos"], fonte: "PHB pg. 178" },
      { nome: "Natureza",    tag: "Perícia de Int.", descricao: "Terreno, plantas, animais, clima e ciclos naturais.", fonte: "PHB pg. 178" },
      { nome: "Religião",    tag: "Perícia de Int.", descricao: "Divindades, rituais, hierarquias religiosas, símbolos sagrados e cultos secretos.", fonte: "PHB pg. 178" },
    ],
  },
  {
    atributo: "Sabedoria", cor: "border-emerald-700",
    pericias: [
      { nome: "Sabedoria", tag: "Atributo", descricao: "Sintonia com o mundo, percepção e intuição.", bullets: ["Obter pressentimento sobre o que fazer", "Discernir se uma criatura é morto-vivo"], fonte: "LDJ pg. 178" },
      { nome: "Adestrar Animais", tag: "Perícia de Sab.", descricao: "Acalmar animais domesticados, impedir montaria de se assustar e controlar montaria em manobras arriscadas.", fonte: "PHB pg. 178" },
      { nome: "Intuição",   tag: "Perícia de Sab.", descricao: "Determinar intenções de uma criatura, perceber mentiras e prever próximos passos com base em linguagem corporal.", fonte: "PHB pg. 178" },
      { nome: "Medicina",   tag: "Perícia de Sab.", descricao: "Tentar estabilizar um aliado morrendo ou diagnosticar doenças.", fonte: "PHB pg. 178" },
      { nome: "Percepção",  tag: "Perícia de Sab.", descricao: "Observar, ouvir ou detectar presença de algo no ambiente.", bullets: ["Ouvir conversa através de uma porta", "Detectar emboscada ou passagem secreta"], fonte: "PHB pg. 178" },
      { nome: "Sobrevivência", tag: "Perícia de Sab.", descricao: "Seguir rastros, caçar, navegar por terrenos hostis e evitar perigos naturais.", fonte: "PHB pg. 178" },
    ],
  },
  {
    atributo: "Carisma", cor: "border-purple-700",
    pericias: [
      { nome: "Carisma",     tag: "Atributo", descricao: "Capacidade de interagir eficazmente — confiança, eloquência e personalidade.", bullets: ["Achar a melhor pessoa para obter rumores", "Misturar-se na multidão para colher informações"], fonte: "LDJ pg. 178" },
      { nome: "Atuação",     tag: "Perícia de Car.", descricao: "Entreter uma plateia com música, dança, atuação ou contação de histórias.", fonte: "PHB pg. 178" },
      { nome: "Enganação",   tag: "Perícia de Car.", descricao: "Esconder a verdade de forma convincente, verbal ou através de ações.", bullets: ["Iludir um guarda ou comerciante", "Amenizar suspeitas com falsas garantias", "Manter cara séria ao contar uma mentira"], fonte: "PHB pg. 178" },
      { nome: "Intimidação", tag: "Perícia de Car.", descricao: "Influenciar alguém através de ameaças abertas, ações hostis ou violência física.", bullets: ["Arrancar informações de prisioneiro", "Convencer bandidos a recuar de um confronto"], fonte: "PHB pg. 179" },
      { nome: "Persuasão",   tag: "Perícia de Car.", descricao: "Influenciar alguém com tato, delicadeza e boa índole.", bullets: ["Convencer mordomo a conceder audiência ao rei", "Negociar paz entre tribos em conflito"], fonte: "PHB pg. 179" },
    ],
  },
];

// ─── Combate ──────────────────────────────────────────────────────────────────

const TESTES: Entrada[] = [
  { nome: "Teste de Habilidade", tag: "d20 + mod + prof", descricao: "Superar um desafio usando um talento. Role d20, adicione o modificador relevante e compare à CD definida pelo Mestre.", bullets: ["Igual ou acima da CD = sucesso", "Abaixo da CD = fracasso ou progresso com revés"], fonte: "PHB pg. 176" },
  { nome: "Teste de Resistência", tag: "d20 + mod", descricao: "Resistir a magia, veneno, armadilha ou ameaça similar. Você não decide fazê-lo — é forçado.", bullets: ["CD determinada pelo efeito que o provocou", "Cada classe concede proficiência em 2 resistências"], fonte: "PHB pg. 181" },
  { nome: "Jogada de Ataque", tag: "d20 + mod + prof", descricao: "Determina se o ataque acerta. Total ≥ CA do alvo = acerto.", bullets: ["Corpo a corpo: usa Força | À distância: usa Destreza", "Acuidade e Arremesso podem usar Destreza em corpo a corpo", "Natural 20 = acerto crítico | Natural 1 = erro automático"], fonte: "PHB pg. 196" },
  { nome: "Vantagem / Desvantagem", tag: "2d20, use o melhor/pior", descricao: "Role dois d20 e use o maior (vantagem) ou menor (desvantagem).", bullets: ["Múltiplas fontes ainda resultam em apenas 1 dado extra", "Vantagem + desvantagem se cancelam — role 1 d20 normal"], fonte: "PHB pg. 175" },
  { nome: "Bônus de Proficiência", tag: "+2 a +6 por nível", descricao: "Adicionado a ataques, testes e resistências em que o personagem tem treinamento.", bullets: ["Não pode ser adicionado mais de uma vez à mesma jogada", "Pode ser multiplicado ou dividido por habilidades específicas"], fonte: "PHB pg. 11" },
  { nome: "Resistência / Vulnerabilidade", tag: "×½ / ×2 dano", descricao: "Resistência reduz o dano pela metade. Vulnerabilidade o dobra. Aplicados após todos os modificadores.", bullets: ["Múltiplas resistências ainda resultam em ×½ — não acumula"], fonte: "PHB pg. 199" },
];

const ACOES: Entrada[] = [
  { nome: "Ataque",       tag: "Ação", descricao: "Realize 1 ataque corpo a corpo ou à distância (ou mais com Ataque Extra).", bullets: ["Pode substituir um ataque por Agarrão ou Encontrão", "Vantagem: alvos cegos, paralisados, petrificados, inconscientes ou caídos (corpo a corpo)", "Desvantagem: alvos invisíveis, ataques à distância contra caídos"], fonte: "PHB pg. 194" },
  { nome: "Agarrão",      tag: "Ataque especial", descricao: "Substitui um ataque. Alvo até 1 cat. maior, ao alcance.", bullets: ["Teste de Força (Atletismo) resistido pelo Atl. ou Acrobacia do alvo", "Sucesso: alvo fica Agarrado (velocidade = 0)"], fonte: "PHB pg. 197" },
  { nome: "Encontrão",    tag: "Ataque especial", descricao: "Empurra ou derruba uma criatura Grande ou menor ao alcance.", bullets: ["Teste de Força (Atletismo) resistido", "Sucesso: derruba (Caído) ou empurra 1,5m"], fonte: "PHB pg. 197" },
  { nome: "Escapar",      tag: "Ação", descricao: "Escapar de um agarrão.", bullets: ["Teste de Força (Atletismo) ou Destreza (Acrobacia) resistido pelo Atletismo do agarrador"], fonte: "PHB pg. 197" },
  { nome: "Ajudar",       tag: "Ação", descricao: "Concede vantagem ao próximo teste ou ataque de um aliado (até início do seu próximo turno).", fonte: "PHB pg. 194" },
  { nome: "Desengajar",   tag: "Ação", descricao: "Seu movimento não provoca ataques de oportunidade até o fim do turno.", fonte: "PHB pg. 192" },
  { nome: "Disparada",    tag: "Ação", descricao: "Ganha movimento extra igual à sua velocidade neste turno.", fonte: "PHB pg. 192" },
  { nome: "Esquivar",     tag: "Ação", descricao: "Até o próximo turno: ataques contra você têm desvantagem (se você vir o atacante) e você tem vantagem em testes de Destreza.", fonte: "PHB pg. 194" },
  { nome: "Esconder",     tag: "Ação", descricao: "Faça teste de Furtividade. Resultado contestado pela Percepção Passiva de criaturas próximas.", bullets: ["Precisa de cobertura total, escuridão densa ou invisibilidade", "Barulho revela sua posição"], fonte: "PHB pg. 194" },
  { nome: "Preparar",     tag: "Ação", descricao: "Escolha um gatilho e uma reação para executar quando ele ocorrer.", bullets: ["Magias preparadas exigem concentração para segurar a energia"], fonte: "PHB pg. 195" },
  { nome: "Conjurar Magia", tag: "Ação", descricao: "Conjura magia com tempo de conjuração de 1 ação.", bullets: ["Não pode conjurar 2 magias que não sejam truques no mesmo turno", "Alvo precisa ter linha de visão (sem cobertura total)", "Concentração: quebrada por outra magia concentrada, incapacitação ou dano (CD 10 ou ½ dano, o maior)"], fonte: "PHB pg. 194" },
  { nome: "Procurar",     tag: "Ação", descricao: "Dedique atenção para encontrar algo — Percepção ou Investigação.", fonte: "PHB pg. 195" },
  { nome: "Usar Objeto",  tag: "Ação", descricao: "Interagir com um segundo objeto (o primeiro é gratuito) ou usar habilidade especial de item.", fonte: "PHB pg. 195" },
  { nome: "Usar Escudo / Armadura", tag: "Ação / Minutos", descricao: "Equipar ou desequipar escudo custa 1 ação.", bullets: ["Armadura leve: 1 min vestir/remover", "Armadura média: 5 min vestir, 1 min remover", "Armadura pesada: 10 min vestir, 5 min remover"], fonte: "PHB pg. 146" },
  { nome: "Improvisar",   tag: "Ação", descricao: "Qualquer ação fora da lista — o Mestre define se é possível e qual teste fazer.", fonte: "PHB pg. 195" },
];

const BONUS: Entrada[] = [
  { nome: "Combater com Duas Armas", tag: "Ação Bônus", descricao: "Usável somente após atacar com arma corpo a corpo leve. Ataca com a outra arma leve na outra mão.", bullets: ["Não adiciona modificador de habilidade ao dano (exceto se negativo)", "Se a arma tiver Arremesso, pode arremessá-la"], fonte: "PHB pg. 194" },
  { nome: "Conjurar Magia", tag: "Ação Bônus", descricao: "Conjura magia com tempo de conjuração de 1 ação bônus.", bullets: ["Não pode usar ação para conjurar outra magia não-truque no mesmo turno"], fonte: "PHB pg. 192" },
  { nome: "Usar Característica", tag: "Ação Bônus", descricao: "Ativar habilidade de classe ou raça que usa uma ação bônus.", fonte: "Veja a página da classe" },
];

const REACOES: Entrada[] = [
  { nome: "Ataque de Oportunidade", tag: "Reação", descricao: "Quando inimigo sai do seu alcance: realize 1 ataque corpo a corpo imediatamente.", bullets: ["Não ocorre ao usar Desengajar, teletransporte ou ser movido por outra força"], fonte: "PHB pg. 197" },
  { nome: "Ação Preparada",         tag: "Reação", descricao: "Execute a reação definida pela sua ação Preparar quando o gatilho ocorrer.", fonte: "PHB pg. 194" },
  { nome: "Conjurar Magia",         tag: "Reação", descricao: "Conjura magia com tempo de conjuração de 1 reação. Gatilho especificado pela magia.", fonte: "PHB pg. 192" },
];

// ─── Movimento ────────────────────────────────────────────────────────────────

const MOVIMENTOS: Entrada[] = [
  { nome: "Mover-se",           tag: "1m por 1m",      descricao: "Movimento básico. Pode dividir o deslocamento antes e depois de ações.", bullets: ["Pode passar pelo espaço de aliado (mas não terminar nele)", "Espaço de inimigo = terreno difícil (só passa se 2 cats. de diferença)"], fonte: "PHB pg. 192" },
  { nome: "Terreno Difícil",    tag: "+1,5m por 1,5m", descricao: "Mover-se em móveis, escombros, neve, pântano, escadas íngremes ou espaço de outra criatura custa 1,5m extra.", fonte: "PHB pg. 192" },
  { nome: "Escalar",            tag: "3m por 1,5m",    descricao: "Escalada em superfícies difíceis pode exigir Força (Atletismo).", fonte: "PHB pg. 184" },
  { nome: "Nadar",              tag: "3m por 1,5m",    descricao: "Natação em condições adversas pode exigir Força (Atletismo).", fonte: "PHB pg. 184" },
  { nome: "Rastejar",           tag: "3m por 1,5m",    descricao: "Único movimento possível sob a condição Caído.", fonte: "PHB pg. 184" },
  { nome: "Levantar-se",        tag: "½ do movimento", descricao: "Sair da condição Caído. Impossível se deslocamento = 0 ou sem espaço suficiente.", fonte: "PHB pg. 192" },
  { nome: "Estar Caído",        tag: "0m (gratuito)",  descricao: "Jogar-se ao chão sem custo. Aplica condição Caído.", fonte: "PHB pg. 192" },
  { nome: "Salto em Distância", tag: "1m por 1m",      descricao: "Distância = valor de Força × 0,3m (com 3m de impulso) ou metade sem impulso.", bullets: ["CD 10 Atletismo para superar obstáculo baixo no percurso", "CD 10 Acrobacia para aterrissar de pé"], fonte: "PHB pg. 184" },
  { nome: "Salto em Altura",    tag: "1m por 1m",      descricao: "Altura = 0,3 × (3 + mod. Força) com impulso, ou metade sem impulso.", bullets: ["Pode estender os braços +½ da altura para alcançar objetos"], fonte: "PHB pg. 184" },
  { nome: "Arrastar Agarrado",  tag: "½ velocidade",   descricao: "Mover criatura agarrada com você — velocidade reduzida à metade, exceto se ela for 2+ cats. menor.", fonte: "PHB pg. 197" },
];

// ─── Condições ────────────────────────────────────────────────────────────────

const CONDICOES: Entrada[] = [
  { nome: "Agarrado",     descricao: "Velocidade = 0. Encerra se o agarrador ficar incapacitado ou a criatura for removida do alcance.", fonte: "PHB pg. 291" },
  { nome: "Amedrontado",  descricao: "Desvantagem em testes e ataques enquanto a fonte do medo estiver em linha de visão. Não pode se mover voluntariamente em direção à fonte.", fonte: "PHB pg. 291" },
  { nome: "Atordoado",    descricao: "Incapacitado. Não pode se mover e fala hesitantemente. Ataques contra ele têm vantagem. Falha automática em Força e Destreza.", fonte: "PHB pg. 291" },
  { nome: "Caído",        descricao: "Só pode rastejar. Desvantagem nos próprios ataques. Ataques corpo a corpo contra ele têm vantagem; à distância têm desvantagem.", fonte: "PHB pg. 291" },
  { nome: "Cego",         descricao: "Falha em testes que exigem visão. Desvantagem em ataques. Ataques contra ele têm vantagem.", fonte: "PHB pg. 291" },
  { nome: "Enfeitiçado",  descricao: "Não pode atacar o enfeitiçador nem alvo com efeito nocivo. O enfeitiçador tem vantagem em interações sociais com ele.", fonte: "PHB pg. 292" },
  { nome: "Envenenado",   descricao: "Desvantagem em jogadas de ataque e testes de habilidade.", fonte: "PHB pg. 292" },
  { nome: "Impedido",     descricao: "Velocidade = 0. Ataques contra ele têm vantagem. Seus ataques e testes de Destreza têm desvantagem.", fonte: "PHB pg. 292" },
  { nome: "Incapacitado", descricao: "Não pode realizar ações ou reações.", fonte: "PHB pg. 292" },
  { nome: "Inconsciente", descricao: "Incapacitado, imóvel, sem fala ou consciência. Ataques contra ele têm vantagem e são críticos se o atacante estiver a 1,5m.", fonte: "PHB pg. 292" },
  { nome: "Invisível",    descricao: "Só detectável por barulho ou rastro. Ataques contra ele têm desvantagem. Seus ataques têm vantagem.", fonte: "PHB pg. 293" },
  { nome: "Paralisado",   descricao: "Incapacitado. Falha automática em Força e Destreza. Ataques têm vantagem. Acerto crítico se atacante estiver a 1,5m.", fonte: "PHB pg. 293" },
  { nome: "Petrificado",  descricao: "Transformado em substância sólida. Incapacitado. Resistência a todos os danos. Imune a veneno e doença (suspensa).", fonte: "PHB pg. 293" },
  { nome: "Surdo",        descricao: "Falha em testes que exigem audição.", fonte: "PHB pg. 293" },
  {
    nome: "Exaustão", descricao: "Medida em 6 níveis cumulativos. Descanso longo remove 1 nível (exige comida e água).",
    bullets: ["1 — Desvantagem em testes de habilidade", "2 — Deslocamento ÷ 2", "3 — Desvantagem em ataques e resistências", "4 — Máximo de PV ÷ 2", "5 — Deslocamento = 0", "6 — Morte"],
    fonte: "PHB pg. 292",
  },
];

// ─── Ambiente ─────────────────────────────────────────────────────────────────

const AMBIENTE: Entrada[] = [
  { nome: "Luz Plena",          tag: "Visão normal",         descricao: "Permite visão normal. Inclui dias nublados, tochas, lanternas e fogueiras dentro do raio de iluminação.", fonte: "PHB pg. 185" },
  { nome: "Penumbra",           tag: "Levemente obscurecida",descricao: "Limite entre fonte de luz e escuridão. Nascer/pôr do sol. Lua cheia brilhante.", fonte: "PHB pg. 185" },
  { nome: "Escuridão Total",    tag: "Fortemente obscurecida",descricao: "Ao ar livre à noite (sem lua), masmorras, salas subterrâneas ou escuridão mágica.", fonte: "PHB pg. 185" },
  { nome: "Escuridão Leve",     tag: "Desvantagem Percepção", descricao: "Criaturas em área levemente obscurecida têm desvantagem em Percepção que depende de visão.", fonte: "PHB pg. 185" },
  { nome: "Escuridão Densa",    tag: "Cegueira efetiva",      descricao: "Criatura em área fortemente obscurecida sofre condição Cegueira.", fonte: "PHB pg. 185" },
  { nome: "Visão no Escuro",    tag: "Raio específico",       descricao: "Penumbra = luz plena; Escuridão = penumbra. Sem distinção de cores no escuro.", fonte: "PHB pg. 187" },
  { nome: "Percepção às Cegas", tag: "Sem precisar de visão", descricao: "Perceber o entorno sem luz, dentro de um raio específico.", fonte: "PHB pg. 185" },
  { nome: "Visão Verdadeira",   tag: "Raio específico",       descricao: "Vê na escuridão total e mágica, detecta invisíveis, ilusões e formas verdadeiras. Também vê no Plano Etéreo.", fonte: "PHB pg. 187" },
  { nome: "Meia Cobertura",     tag: "+2 CA e Destreza",      descricao: "Obstáculo bloqueia ao menos metade do corpo (mureta, móvel, outra criatura).", fonte: "PHB pg. 198" },
  { nome: "¾ de Cobertura",     tag: "+5 CA e Destreza",      descricao: "Obstáculo cobre pelo menos ¾ do corpo (grade, seteira, tronco robusto).", fonte: "PHB pg. 198" },
  { nome: "Cobertura Total",    tag: "Não pode ser alvo",      descricao: "Completamente escondido atrás de obstáculo. Não pode ser alvo direto de ataque ou magia.", fonte: "PHB pg. 198" },
  { nome: "Queda",              tag: "1d6 por 3m (máx 20d6)", descricao: "Dano de concussão. Criatura fica Caída a menos que evite o dano. Teste Atletismo ou Acrobacia para evitar.", fonte: "PHB pg. 185" },
  { nome: "Asfixia",            tag: "1 + mod CON minutos",   descricao: "Após esse tempo sem respirar: sobrevive por rodadas = mod CON (mín 1). Depois disso: 0 PV e morrendo.", fonte: "PHB pg. 185" },
];

// ─── Domínio (Mastery Properties) ────────────────────────────────────────────

const DOMINIO: Entrada[] = [
  { nome: "Cleave",    tag: "Pesada, corpo a corpo",  descricao: "Ao acertar, realize 1 ataque adicional contra outra criatura a 1,5m da primeira. Causa dano da arma sem modificador (exceto se negativo). 1×/turno." },
  { nome: "Flex",      tag: "Versátil",               descricao: "Ao acertar, causa o dano Versátil mesmo usando apenas uma mão." },
  { nome: "Graze",     tag: "Qualquer",               descricao: "Se errar por até 5 pontos da CA do alvo: causa dano igual ao modificador de habilidade (mín 1). Não pode ser aumentado." },
  { nome: "Nick",      tag: "Leve",                   descricao: "O ataque extra da propriedade Leve é feito como parte da ação de Ataque (não consome ação bônus). 1×/turno." },
  { nome: "Push",      tag: "Qualquer",               descricao: "Ao acertar: alvo Grande ou menor faz teste de Força. Falha = empurrado 3m." },
  { nome: "Sap",       tag: "Qualquer",               descricao: "Ao acertar: pode não adicionar modificador ao dano. Alvo faz teste de Constituição. Falha = desvantagem no próximo ataque." },
  { nome: "Slow",      tag: "Qualquer",               descricao: "Ao causar dano: velocidade do alvo reduzida em 3m até seu próximo turno. Não acumula." },
  { nome: "Topple",    tag: "Qualquer",               descricao: "Ao acertar criatura Grande ou menor: pode abrir mão do dano. Alvo faz teste de Força ou Destreza. Falha = Caído." },
  { nome: "Vex",       tag: "Munição, Acuidade ou Leve", descricao: "Ao acertar: pode não adicionar modificador ao dano. Próximo ataque de outro aliado contra o mesmo alvo tem vantagem." },
];

// ─── Armas ────────────────────────────────────────────────────────────────────

const SIMPLES_MELEE: ArmaTbl[] = [
  { nome: "Clava (Club)",         dano: "1d4 Contusão",   props: "Leve",                          maestria: "Slow",  peso: "2 lb.",  custo: "1 SP" },
  { nome: "Adaga (Dagger)",       dano: "1d4 Perfurante", props: "Acuidade, Leve, Arremesso 6/18m",maestria: "Nick",  peso: "1 lb.",  custo: "2 GP" },
  { nome: "Maçaneta (Greatclub)", dano: "1d8 Contusão",   props: "Duas mãos",                     maestria: "Push",  peso: "10 lb.", custo: "2 SP" },
  { nome: "Machadinha (Handaxe)", dano: "1d6 Cortante",   props: "Leve, Arremesso 6/18m",         maestria: "Vex",   peso: "2 lb.",  custo: "5 GP" },
  { nome: "Dardo (Javelin)",      dano: "1d6 Perfurante", props: "Arremesso 9/36m",               maestria: "Slow",  peso: "2 lb.",  custo: "5 SP" },
  { nome: "Martelo Leve",         dano: "1d4 Contusão",   props: "Leve, Arremesso 6/18m",         maestria: "Nick",  peso: "2 lb.",  custo: "2 GP" },
  { nome: "Maça (Mace)",          dano: "1d6 Contusão",   props: "—",                             maestria: "Sap",   peso: "4 lb.",  custo: "5 GP" },
  { nome: "Cajado (Quarterstaff)",dano: "1d6 Contusão",   props: "Versátil (1d8)",                maestria: "Flex",  peso: "4 lb.",  custo: "2 SP" },
  { nome: "Foice (Sickle)",       dano: "1d4 Cortante",   props: "Leve",                          maestria: "Nick",  peso: "2 lb.",  custo: "1 GP" },
  { nome: "Lança (Spear)",        dano: "1d6 Perfurante", props: "Arremesso 6/18m, Versátil (1d8)",maestria: "Flex", peso: "3 lb.",  custo: "1 GP" },
];

const SIMPLES_RANGED: ArmaTbl[] = [
  { nome: "Besta Leve",  dano: "1d8 Perfurante", props: "Mun. 24/96m, Recarregar, Duas mãos", maestria: "Slow", peso: "5 lb.",    custo: "25 GP" },
  { nome: "Dardo",       dano: "1d4 Perfurante", props: "Acuidade, Arremesso 6/18m",           maestria: "Vex",  peso: "0,25 lb.", custo: "5 CP"  },
  { nome: "Arco Curto",  dano: "1d6 Perfurante", props: "Mun. 24/96m, Duas mãos",              maestria: "Vex",  peso: "2 lb.",   custo: "25 GP" },
  { nome: "Funda (Sling)",dano: "1d4 Contusão",  props: "Mun. 9/36m",                          maestria: "Slow", peso: "—",       custo: "1 SP"  },
];

const MARCIAL_MELEE: ArmaTbl[] = [
  { nome: "Machado de Batalha", dano: "1d8 Cortante",   props: "Versátil (1d10)",               maestria: "Topple", peso: "4 lb.",  custo: "10 GP" },
  { nome: "Mangual (Flail)",    dano: "1d8 Contusão",   props: "—",                             maestria: "Sap",    peso: "2 lb.",  custo: "10 GP" },
  { nome: "Glaive",             dano: "1d10 Cortante",  props: "Pesada, Alcance, Duas mãos",    maestria: "Graze",  peso: "6 lb.",  custo: "20 GP" },
  { nome: "Machado Grande",     dano: "1d12 Cortante",  props: "Pesada, Duas mãos",             maestria: "Graze",  peso: "7 lb.",  custo: "30 GP" },
  { nome: "Espada Grande",      dano: "2d6 Cortante",   props: "Pesada, Duas mãos",             maestria: "Graze",  peso: "6 lb.",  custo: "50 GP" },
  { nome: "Alabarda (Halberd)", dano: "1d10 Cortante",  props: "Pesada, Alcance, Duas mãos",    maestria: "Cleave", peso: "6 lb.",  custo: "20 GP" },
  { nome: "Lança de Cavalaria", dano: "1d12 Perfurante",props: "Alcance, Especial",             maestria: "Topple", peso: "6 lb.",  custo: "10 GP" },
  { nome: "Espada Longa",       dano: "1d8 Cortante",   props: "Versátil (1d10)",               maestria: "Flex",   peso: "3 lb.",  custo: "15 GP" },
  { nome: "Maul",               dano: "2d6 Contusão",   props: "Pesada, Duas mãos",             maestria: "Topple", peso: "10 lb.", custo: "10 GP" },
  { nome: "Morningstar",        dano: "1d8 Perfurante", props: "—",                             maestria: "Sap",    peso: "4 lb.",  custo: "15 GP" },
  { nome: "Pique (Pike)",       dano: "1d10 Perfurante",props: "Pesada, Alcance, Duas mãos",    maestria: "Push",   peso: "18 lb.", custo: "5 GP"  },
  { nome: "Rapieira (Rapier)",  dano: "1d8 Perfurante", props: "Acuidade",                      maestria: "Vex",    peso: "2 lb.",  custo: "25 GP" },
  { nome: "Cimitarra (Scimitar)",dano:"1d6 Cortante",   props: "Acuidade, Leve",                maestria: "Nick",   peso: "3 lb.",  custo: "25 GP" },
  { nome: "Espada Curta",       dano: "1d6 Perfurante", props: "Acuidade, Leve",                maestria: "Vex",    peso: "2 lb.",  custo: "10 GP" },
  { nome: "Tridente",           dano: "1d6 Perfurante", props: "Arremesso 6/18m, Versátil (1d8)",maestria:"Topple", peso: "4 lb.",  custo: "5 GP"  },
  { nome: "Picareta de Guerra", dano: "1d8 Perfurante", props: "—",                             maestria: "Flex",   peso: "2 lb.",  custo: "5 GP"  },
  { nome: "Martelo de Guerra",  dano: "1d8 Contusão",   props: "Versátil (1d10)",               maestria: "Flex",   peso: "2 lb.",  custo: "15 GP" },
  { nome: "Chicote (Whip)",     dano: "1d4 Cortante",   props: "Acuidade, Alcance",             maestria: "Slow",   peso: "3 lb.",  custo: "2 GP"  },
];

const MARCIAL_RANGED: ArmaTbl[] = [
  { nome: "Zarabatana (Blowgun)", dano: "1 Perfurante",   props: "Mun. 7,5/30m, Recarregar",         maestria: "Vex",  peso: "1 lb.",  custo: "10 GP"  },
  { nome: "Besta de Mão",        dano: "1d6 Perfurante",  props: "Mun. 9/36m, Leve, Recarregar",     maestria: "Vex",  peso: "3 lb.",  custo: "75 GP"  },
  { nome: "Besta Pesada",        dano: "1d10 Perfurante", props: "Mun. 30/120m, Pesada, Recarregar, Duas mãos", maestria: "Slow", peso: "18 lb.", custo: "50 GP" },
  { nome: "Arco Longo",          dano: "1d8 Perfurante",  props: "Mun. 45/180m, Pesada, Duas mãos",  maestria: "Slow", peso: "2 lb.",  custo: "50 GP"  },
  { nome: "Mosquete (Musket)",   dano: "1d12 Perfurante", props: "Mun. 12/36m, Recarregar, Duas mãos",maestria: "Slow",peso: "10 lb.", custo: "500 GP" },
  { nome: "Pistola",             dano: "1d10 Perfurante", props: "Mun. 9/27m, Recarregar",           maestria: "Vex",  peso: "3 lb.",  custo: "250 GP" },
];

// ─── Regras da Mesa ───────────────────────────────────────────────────────────

const REGRAS_MESA: RegrasCasa[] = [
  {
    titulo: "Capacidade de Carga",
    icon: "🏋️",
    descricao: "Ligada ao modificador de Força. Itens podem aumentar a capacidade.",
    bullets: ["+0 = 20 kg", "+1 = 30 kg", "+2 = 40 kg", "+3 = 50 kg", "+4 = 60 kg", "+5 = 70 kg"],
  },
  {
    titulo: "Inteligência e Perícias",
    icon: "🧠",
    descricao: "Cada ponto positivo no modificador de Inteligência concede 1 perícia extra (ou proficiência em tipo de arma/armadura).",
    bullets: ["Modificador negativo: personagem é analfabeto", "Modificador negativo não remove perícias existentes", "1 ponto INT = 1 tipo de arma ou armadura (ex: armaduras leves)"],
  },
  {
    titulo: "Conjuração sob Estresse",
    icon: "🔮",
    descricao: "Em combate ou situações adversas, conjurar exige teste. Role d20 + mod de conjuração + proficiência contra uma CD.",
    bullets: [
      "CD base: 10 (truques) | +1 por nível de magia (nível 1 = CD 11, nível 5 = CD 15...)",
      "Falha: espaço de magia não é gasto, magia não acontece",
      "Acerto crítico (nat 20): espaço não gasto + efeito da magia duplicado",
      "Nat 20 em uma magia: torna-se proficiente nela (nunca mais precisa testar sob estresse)",
      "Personagem começa fluente em magias = valor do bônus de proficiência",
    ],
  },
  {
    titulo: "Ajuda Médica",
    icon: "🩹",
    descricao: "Usar kit médico para tratar ferimentos (ação + teste de Medicina) permite gastar 1 dado de vida da classe para se curar.",
  },
  {
    titulo: "Acerto Crítico",
    icon: "🎯",
    descricao: "Em vez de rolar dois dados: role apenas UM e some o valor máximo do outro.",
    bullets: ["Ex: 2d6 → role 1d6 + 6 (ao invés de 2d6)"],
  },
  {
    titulo: "Descanso",
    icon: "😴",
    descricao: "Descanso Curto (mín 1 hora): gaste dado de vida da classe + mod CON para curar. Descanso Longo (mín 8 horas): cura nível × dado de vida + mod CON.",
    bullets: ["Qualidade do acampamento, cobertura e alimentação concedem bônus na recuperação"],
  },
  {
    titulo: "Morte",
    icon: "💀",
    descricao: "Testes de morte padrão da 5e. Exceção: se os pontos de vida ficarem negativos igual ou maior que metade da vida máxima, morte imediata.",
    bullets: ["PV negativos ≥ ½ PV máximo → morte instantânea", "Resto permanece igual ao padrão da 5e"],
  },
  {
    titulo: "Flanquear",
    icon: "⚔️",
    descricao: "Flanquear não concede vantagem. Em vez disso, aliados em lados opostos do inimigo ganham +2 na jogada de ataque.",
    bullets: ["Bônus não concedido se o alvo tiver Percepção Passiva ≥ 18, visão no escuro ou visão múltipla (ex: Beholder)"],
  },
  {
    titulo: "Lesão Permanente",
    icon: "🩸",
    descricao: "Ao receber dano ≥ metade do total de PV em um único golpe: teste de Constituição resistido (CD base 15, +1 para cada 10 de dano acima do limite).",
  },
  {
    titulo: "Poções de Cura",
    icon: "🧪",
    descricao: "Usar uma poção de cura consome apenas uma Ação Bônus.",
  },
  {
    titulo: "Ação de Ajuda Requer Proficiência",
    icon: "🤝",
    descricao: "Para conceder vantagem com a ação de Ajuda em um teste de habilidade, você precisa ser proficiente naquela perícia.",
    bullets: ["Bárbaro (sem Arcanismo) não pode ajudar Mago em teste de Arcanismo", "Mago (sem Atletismo) não pode ajudar Bárbaro a empurrar um bloco"],
  },
  {
    titulo: "Componentes Mágicos",
    icon: "💎",
    descricao: "Separação entre componentes simples (facilmente encontrados) e raros (exigem busca ou compra específica) para realização de magias.",
  },
];

// ─── Sub-componentes ──────────────────────────────────────────────────────────

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-xl border border-fundo-da-grota-ash/60 bg-card p-4 ${className}`}>{children}</div>
);

const TagBadge = ({ text }: { text: string }) => (
  <span className="text-[10px] font-cinzel tracking-wider px-2 py-0.5 rounded bg-fundo-da-grota-orange/15 text-fundo-da-grota-ember border border-fundo-da-grota-orange/20">
    {text}
  </span>
);

const EntradaCard = ({ e }: { e: Entrada }) => (
  <Card>
    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
      <h3 className="font-cinzel font-bold text-fundo-da-grota-gold text-sm">{e.nome}</h3>
      {e.tag && <TagBadge text={e.tag} />}
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{e.descricao}</p>
    {e.bullets && (
      <ul className="space-y-1">
        {e.bullets.map((b, i) => (
          <li key={i} className="text-xs text-muted-foreground flex gap-2">
            <span className="text-fundo-da-grota-ember shrink-0">›</span>{b}
          </li>
        ))}
      </ul>
    )}
    {e.fonte && <p className="text-[10px] text-fundo-da-grota-ash mt-2 italic">{e.fonte}</p>}
  </Card>
);


const WeaponTable = ({ title, armas }: { title: string; armas: ArmaTbl[] }) => (
  <div className="col-span-full">
    <h3 className="font-cinzel font-bold text-fundo-da-grota-orange text-sm tracking-widest uppercase mb-3">{title}</h3>
    <div className="overflow-x-auto rounded-xl border border-fundo-da-grota-ash/60">
      <table className="w-full text-xs min-w-[600px]">
        <thead>
          <tr className="bg-fundo-da-grota-charcoal border-b border-fundo-da-grota-ash/60">
            {["Arma", "Dano", "Propriedades", "Maestria", "Peso", "Custo"].map(h => (
              <th key={h} className="text-left px-3 py-2 font-cinzel text-fundo-da-grota-gold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {armas.map((a, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-fundo-da-grota-charcoal/40"}>
              <td className="px-3 py-2 font-semibold text-foreground whitespace-nowrap">{a.nome}</td>
              <td className="px-3 py-2 text-fundo-da-grota-ember whitespace-nowrap">{a.dano}</td>
              <td className="px-3 py-2 text-muted-foreground">{a.props}</td>
              <td className="px-3 py-2"><TagBadge text={a.maestria} /></td>
              <td className="px-3 py-2 text-muted-foreground whitespace-nowrap">{a.peso}</td>
              <td className="px-3 py-2 text-muted-foreground whitespace-nowrap">{a.custo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// ─── Conteúdo por aba ─────────────────────────────────────────────────────────

const TabAtributos = () => (
  <div className="space-y-8">
    {ATRIBUTOS.map(g => (
      <div key={g.atributo}>
        <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-lg border-l-4 ${g.cor} bg-fundo-da-grota-charcoal/60`}>
          <h3 className="font-cinzel font-bold text-fundo-da-grota-gold">{g.atributo}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {g.pericias.map(e => <EntradaCard key={e.nome} e={e} />)}
        </div>
      </div>
    ))}
  </div>
);

const TabCombate = () => (
  <div className="space-y-8">
    <div>
      <p className="font-cinzel font-bold text-fundo-da-grota-orange text-sm tracking-widest uppercase mb-4">Testes e Jogadas</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {TESTES.map(e => <EntradaCard key={e.nome} e={e} />)}
      </div>
    </div>
    <div>
      <p className="font-cinzel font-bold text-fundo-da-grota-orange text-sm tracking-widest uppercase mb-4">Ações</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {ACOES.map(e => <EntradaCard key={e.nome} e={e} />)}
      </div>
    </div>
    <div>
      <p className="font-cinzel font-bold text-fundo-da-grota-orange text-sm tracking-widest uppercase mb-4">Ações Bônus</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {BONUS.map(e => <EntradaCard key={e.nome} e={e} />)}
      </div>
    </div>
    <div>
      <p className="font-cinzel font-bold text-fundo-da-grota-orange text-sm tracking-widest uppercase mb-4">Reações</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {REACOES.map(e => <EntradaCard key={e.nome} e={e} />)}
      </div>
    </div>
  </div>
);

const TabMovimento = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {MOVIMENTOS.map(e => <EntradaCard key={e.nome} e={e} />)}
  </div>
);

const TabCondicoes = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {CONDICOES.map(e => <EntradaCard key={e.nome} e={e} />)}
  </div>
);

const TabAmbiente = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {AMBIENTE.map(e => <EntradaCard key={e.nome} e={e} />)}
  </div>
);

const TabDominio = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-fundo-da-grota-orange pl-4">
      Cada arma possui uma <strong className="text-foreground">Propriedade de Domínio</strong>. O personagem pode usar um número de maestrias igual ao seu <strong className="text-foreground">modificador de Inteligência</strong>.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {DOMINIO.map(e => <EntradaCard key={e.nome} e={e} />)}
    </div>
  </div>
);

const TabArmas = () => (
  <div className="space-y-8">
    <WeaponTable title="Armas Simples — Corpo a Corpo" armas={SIMPLES_MELEE} />
    <WeaponTable title="Armas Simples — À Distância"  armas={SIMPLES_RANGED} />
    <WeaponTable title="Armas Marciais — Corpo a Corpo" armas={MARCIAL_MELEE} />
    <WeaponTable title="Armas Marciais — À Distância" armas={MARCIAL_RANGED} />
  </div>
);

const TabMesa = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-fundo-da-grota-gold pl-4">
      Regras customizadas desta mesa. Prevalecem sobre o manual padrão quando há conflito.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {REGRAS_MESA.map(r => (
        <div key={r.titulo} className="rounded-xl border border-fundo-da-grota-gold/40 bg-fundo-da-grota-gold/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{r.icon}</span>
            <h3 className="font-cinzel font-bold text-fundo-da-grota-gold text-sm">{r.titulo}</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mb-2">{r.descricao}</p>
          {r.bullets && (
            <ul className="space-y-1">
              {r.bullets.map((b, i) => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2">
                  <span className="text-fundo-da-grota-gold shrink-0">›</span>{b}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </div>
);

// ─── Página ───────────────────────────────────────────────────────────────────

const CONTENT: Record<Tab, React.ReactNode> = {
  atributos: <TabAtributos />,
  combate:   <TabCombate />,
  movimento: <TabMovimento />,
  condicoes: <TabCondicoes />,
  ambiente:  <TabAmbiente />,
  dominio:   <TabDominio />,
  armas:     <TabArmas />,
  mesa:      <TabMesa />,
};

const Regras = () => {
  const [tab, setTab]       = useState<Tab>("atributos");
  const [visible, setVisible] = useState(true);
  const pendingTab            = useRef<Tab | null>(null);

  const changeTab = (next: Tab) => {
    if (next === tab) return;
    pendingTab.current = next;
    setVisible(false);
  };

  useEffect(() => {
    if (!visible && pendingTab.current) {
      const id = setTimeout(() => {
        setTab(pendingTab.current!);
        pendingTab.current = null;
        setVisible(true);
      }, 120);
      return () => clearTimeout(id);
    }
  }, [visible]);

  return (
    <div className="space-y-8 animate-fade-in-up">
      <PageHeader titulo="Regras" descricao="Referência rápida de D&D 5e + regras da mesa" />

      {/* Tab bar */}
      <div className="flex flex-wrap gap-2">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => changeTab(t.id)}
            className={`px-4 py-2 rounded-lg border text-sm font-cinzel font-semibold transition-all flex items-center gap-1.5 ${
              tab === t.id
                ? "border-fundo-da-grota-orange bg-fundo-da-grota-orange/20 text-fundo-da-grota-gold shadow-[0_0_12px_hsl(var(--fundo-da-grota-orange)/0.3)]"
                : "border-fundo-da-grota-ash/60 text-muted-foreground hover:border-fundo-da-grota-orange/50 hover:text-foreground"
            }`}
          >
            <span>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content com fade */}
      <div
        style={{
          opacity:    visible ? 1 : 0,
          transform:  visible ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.12s ease, transform 0.12s ease",
        }}
      >
        {CONTENT[tab]}
      </div>
    </div>
  );
};

export default Regras;

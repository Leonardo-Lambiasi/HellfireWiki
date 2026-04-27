const fs = require('fs');
const content = fs.readFileSync('QUESTIONARIO.md', 'utf8');

const regexVelen = /### ✅ A Guerra de Velen\n- \*\*Temporada:\*\* (.*?)\n- \*\*Data in-game:\*\* (.*?)\n- \*\*Personagens:\*\* (.*?)\n- \*\*Tags:\*\*(.*?)\n- \*\*Resumo:\*\*([\s\S]*?)---/m;
const regexDiv = /### ✅ Divindades de Ark\n- \*\*Temporada:\*\* (.*?)\n- \*\*Data in-game:\*\* (.*?)\n- \*\*Resumo:\*\*([\s\S]*?)---/m;
const regexKazak = /### ✅ Kazak Abul Kazhak\n- \*\*Temporada:\*\* (.*?)\n- \*\*Data in-game:\*\* (.*?)\n- \*\*Resumo:\*\*([\s\S]*?)---/m;

const matchVelen = content.match(regexVelen);
const matchDiv = content.match(regexDiv);
const matchKazak = content.match(regexKazak);

let velenText = matchVelen[5].replace(/^  > /gm, '').trim();
let divText = matchDiv[3].replace(/^  > /gm, '').replace(/^  >/gm, '').trim();
let kazakText = matchKazak[3].replace(/^  > /gm, '').trim();

const historiasPath = 'src/data/historias.ts';
let historiasContent = fs.readFileSync(historiasPath, 'utf8');

const newHistorias = `  {
    id: 5,
    titulo: "A Guerra de Velen",
    dataIngame: "1195",
    resumo: ${JSON.stringify(velenText)},
    tags: [],
    personagensEnvolvidos: ["Rei de Velen"],
    temporada: null,
  },
  {
    id: 6,
    titulo: "Divindades de Ark",
    dataIngame: "Ano 0",
    resumo: ${JSON.stringify(divText)},
    tags: [],
    personagensEnvolvidos: [],
    temporada: null,
  },
  {
    id: 7,
    titulo: "Kazak Abul Kazhak",
    dataIngame: "100 A.A",
    resumo: ${JSON.stringify(kazakText)},
    tags: [],
    personagensEnvolvidos: [],
    temporada: null,
  }`;

historiasContent = historiasContent.replace('];', newHistorias + '\n];');
fs.writeFileSync(historiasPath, historiasContent);
console.log("Updated historias.ts successfully");

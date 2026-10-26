class Vaga {
  constructor(empresa, cargo, hardskills) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.hardskills = hardskills;
  }

  exibirVaga() {
    console.log("Empresa: " + this.empresa);
    console.log("Cargo: " + this.cargo);
    console.log("Habilidades Técnicas: " + this.hardskills.join(", "));
      }
}

const vagas = [
  new Vaga("Essencial Labs", "Desenvolvedor Front-End Júnior", [
    "JavaScript",
    "HTML5",
    "CSS",
    "Lógica de Programação",
    "GitHub",
  ]),
  new Vaga("Essencial Labs", "Desenvolvedor Front-End Pleno", [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML5",
    "CSS",
    "Lógica de Programação",
    "GitHub",
    "Testes",
  ]),
  new Vaga("Essencial Labs", "Desenvolvedor Front-End Sênior", [
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Vue.js",
    "Next.js",
    "SASS",
    "Node.js",
    "HTML5",
    "CSS",
    "Performance Web",
    "Lógica de Programação",
    "GitHub",
    "Testes",
  ]),
];

module.exports = { Vaga, vagas };

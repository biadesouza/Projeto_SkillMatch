const prompt = require('prompt-sync')();
class Vaga {
  constructor(empresa, cargo, requisitos) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
  }

  exibirVaga() {
    console.log("Empresa: " + this.empresa);
    console.log("Cargo: " + this.cargo);
    console.log("Requisitos: " + this.requisitos.join(", "));
    console.log("------------------------");
  }
}

const vagas = [
  new Vaga("Hiper Soluções", "Desenvolvedor Front-End", ["JavaScript", "HTML", "CSS", "Lógica de Programação",  "GitHub"]),
  new Vaga("Brasil Sistemas", "Desenvolvedor Back-End", ["JavaScript","Node.js", "Python", "Java", "PHP", "C#", "GitHub"]),
  new Vaga("Essencial Labs", "Desenvolvedor Full Stack", ["JavaScript", "Node.js", "React", "Python", "PHP", "HTML", "CSS", "GitHub"]),
];
vagas.forEach(vaga => console.log(vaga.empresa + " - " + vaga.cargo + " - Requisitos: " + vaga.requisitos.join(", ")));

module.exports = Vaga;
const prompt = require('prompt-sync')();

class Candidato {
  constructor(nome, areaInteresse, habilidades, experienciaDevmeses, experienciaComercialanos) {
    this.nome = nome;
    this.areaInteresse = areaInteresse;
    this.habilidades = habilidades;
    this.experienciaDevmeses = experienciaDevmeses;
    this.experienciaComercialanos = experienciaComercialanos;
  }

  exibirCandidato() {
    console.log("Nome: " + this.nome);
    console.log("Área de Interesse: " + this.areaInteresse);
    console.log("Habilidades: " + this.habilidades.join(", "));
    console.log("Experiência em Desenvolvimento: " + this.experienciaDevmeses + " meses");
    console.log("Experiência Comercial: " + this.experienciaComercialanos + " anos");
  }
}

const candidata = new Candidato(
  "Ana Beatriz de Souza Adriano",
  "Desenvolvimento Web",
  ["JavaScript", "HTML", "CSS", "Lógica de Programação", "GitHub", "Comunicação Eficaz", "Trabalho em Equipe", "Resolução de Problemas"],
  5,
  8
);

candidata.exibirCandidato();

module.exports = Candidato;
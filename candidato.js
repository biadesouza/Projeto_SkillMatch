class Candidato {
  constructor(
    nome,
    areaInteresse,
    hardskills,
    experienciaDevmeses,
    experienciaComercialanos,
  ) {
    this.nome = nome;
    this.areaInteresse = areaInteresse;
    this.hardskills = hardskills;
    this.experienciaDevmeses = experienciaDevmeses;
    this.experienciaComercialanos = experienciaComercialanos;
  }

  exibirCandidato() {
    console.log("Nome: " + this.nome);
    console.log("Área de Interesse: " + this.areaInteresse);
    console.log("Habilidades Técnicas: " + this.hardskills.join(", "));
    console.log(
      "Experiência em Desenvolvimento: " + this.experienciaDevmeses + " meses",
    );
    console.log(
      "Experiência Comercial: " + this.experienciaComercialanos + " anos",
    );
  }

  possuiHabilidade(habilidadeProcurada) {
    const habilidade = this.hardskills.find(
      (requisito) =>
        requisito.toLowerCase() === habilidadeProcurada.toLowerCase(),
    );
    return habilidade !== undefined;
  }
}

const candidata = new Candidato(
  "Ana Beatriz de Souza Adriano",
  "Desenvolvimento Web",
  ["JavaScript", "HTML5", "CSS", "Lógica de Programação", "GitHub"],
  5,
  8,
);

module.exports = { Candidato, candidata };

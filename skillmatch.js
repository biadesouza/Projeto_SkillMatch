const { candidata } = require("./candidato.js");
const { Vaga, vagas } = require("./vagas.js");

class VagaDetalhada extends Vaga {
  constructor(empresa, cargo, hardskills, softSkills) {
    super(empresa, cargo, hardskills);
    this.softSkills = softSkills;
  }
  exibirVaga() {
    super.exibirVaga();
    console.log("Soft Skills desejadas: " + this.softSkills.join(", "));
  }
}
const softSkillsPorCargo = {
  "Desenvolvedor Front-End Júnior": ["comunicação", "trabalho em equipe"],
  "Desenvolvedor Front-End Pleno": [
    "comunicação",
    "trabalho em equipe",
    "pensamento crítico",
  ],
  "Desenvolvedor Front-End Sênior": [
    "comunicação",
    "trabalho em equipe",
    "pensamento crítico",
    "resolução de problemas",
    "liderança",
  ],
};

const vagasDetalhadas = vagas.map((vaga) => {
  const softSkills = softSkillsPorCargo[vaga.cargo] || [];
  return new VagaDetalhada(
    vaga.empresa,
    vaga.cargo,
    vaga.hardskills,
    softSkills,
  );
});
function calcularCompatibilidade(candidata, vaga) {
  const habilidadesVaga = vaga.hardskills;

  const requisitosAtendidos = habilidadesVaga.filter((requisito) =>
    candidata.possuiHabilidade(requisito),
  );
  return Math.floor(
    (requisitosAtendidos.length / habilidadesVaga.length) * 100,
  );
}
function carregarVagas() {
  return new Promise((resolve, reject) => {
    console.log("Buscando vagas no servidor...");

    const houveErro = false;

    setTimeout(() => {
      if (houveErro) {
        reject(new Error("Falha ao carregar vagas."));
      } else {
        resolve(vagasDetalhadas);
      }
    }, 1500);
  });
}

function classificarCompatibilidade(percentual) {
  if (percentual >= 80) {
    return "Alta compatibilidade";
  } else if (percentual >= 50) {
    return "Média compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
}

function listarFaltantes(candidata, vagasLista) {
  vagasLista.forEach((vaga) => {
    const faltantes = vaga.hardskills.filter(
      (requisito) => !candidata.possuiHabilidade(requisito),
    );
    if (faltantes.length > 0) {
      console.log(
        `Faltantes para a vaga de ${vaga.cargo}: ${faltantes.join(", ")}`,
      );
    } else {
      console.log(
        `Parabéns! Você possui todas as habilidades para a vaga de ${vaga.cargo}.`,
      );
    }
  });
}

async function executar() {
  let melhorCompatibilidade = 0;
  let melhorVaga = null;
  try {
    const vagasDoServidor = await carregarVagas();
    console.log("===== DADOS DO CANDIDATO =====");

    console.log(`Nome: ${candidata.nome}`);
    console.log(`Área de Interesse: ${candidata.areaInteresse}`);

    console.log("=============================");
    vagasDoServidor.forEach((vaga) => {
      vaga.exibirVaga();
      const compatibilidade = calcularCompatibilidade(candidata, vaga);
      if (compatibilidade > melhorCompatibilidade) {
        melhorCompatibilidade = compatibilidade;
        melhorVaga = vaga;
      }
      console.log(
        `Compatibilidade: ${compatibilidade}% - Classificação: ${classificarCompatibilidade(compatibilidade)}`,
      );
      console.log("------------------------");
    });
    if (melhorVaga) {

  console.log("\n===== MELHOR VAGA =====");

  console.log(`Empresa: ${melhorVaga.empresa}`);
  console.log(`Cargo: ${melhorVaga.cargo}`);
  console.log(
    `Compatibilidade: ${melhorCompatibilidade}%`
  );
  else {
    console.log("Nenhuma vaga encontrada.");  

}
    listarFaltantes(candidata, vagasDoServidor);
   console.log("\n===== MELHOR VAGA =====");

console.log(`Empresa: ${melhorVaga.empresa}`);
console.log(`Cargo: ${melhorVaga.cargo}`);
console.log(`Compatibilidade: ${melhorCompatibilidade}%`);

console.log("=======================");
  } catch (erro) {
    console.error("Erro ao carregar vagas:", erro.message);
  }
}

executar();

function recomendarEstudos(candidata, vagasLista) {

  const tecnologias = {};

  vagasLista.forEach((vaga) => {

    const faltantes = vaga.hardskills.filter(
      (requisito) =>
        !candidata.possuiHabilidade(requisito)
    );
    const estudos =
  recomendarEstudos(  candidata,vagasDoServidor); {
console.log("\n===== PLANO DE ESTUDOS =====");
    faltantes.forEach((habilidade) => {
      if (tecnologias[habilidade]) {

        tecnologias[habilidade]++;

      } else {

        tecnologias[habilidade] = 1;

      }

    });

  });

  return tecnologias;
}
}

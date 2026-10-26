const { candidata } = require("./candidato.js");
const { Vaga, vagas } = require("./vagas.js");

class VagaDetalhada extends Vaga {
  constructor(empresa, cargo, hardskills, softskills) {
    super(empresa, cargo, hardskills);
    this.softskills = softskills;
  }
  exibirVaga() {
    super.exibirVaga();
    console.log("Soft Skills desejadas: " + this.softskills.join(", "));
    console.log("------------------------");
  }
}

const softskillsPorCargo = {
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
  const softskills = softskillsPorCargo[vaga.cargo] || [];
  return new VagaDetalhada(
    vaga.empresa,
    vaga.cargo,
    vaga.hardskills,
    softskills,
  );
});
function calcularCompatibilidade(candidata, vaga) {
  const habilidadesVaga = vaga.hardskills;

  if (habilidadesVaga.length === 0) {
    return 0;
  }

  const requisitosAtendidos = habilidadesVaga.filter((requisito) =>
    candidata.possuiHabilidade(requisito),
  );
  return Math.floor(
    (requisitosAtendidos.length / habilidadesVaga.length) * 100,
  );
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

function listarFaltantes(candidata, vaga) {
  const faltantes = vaga.hardskills.filter(
    (requisito) => !candidata.possuiHabilidade(requisito),
  );
  return faltantes;
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

function percorrerVagas(listaDeVagas, fazerParaCadaVaga) {
  for (let i = 0; i < listaDeVagas.length; i++) {
    const vaga = listaDeVagas[i];
    fazerParaCadaVaga(vaga);
  }
}

function criarContador() {
  let total = 0;
  return () => {
    total++;
    return total;
  };
}

async function executar() {
  const proximaAnalise = criarContador();
  let melhorCompatibilidade = 0;
  let melhorVaga = null;
  const contagemFaltantes = {};

  try {
    const vagasDoServidor = await carregarVagas();

    console.log("===== DADOS DO CANDIDATO =====");
    console.log(`Nome: ${candidata.nome}`);
    console.log(`Área de Interesse: ${candidata.areaInteresse}`);
    console.log("=============================");

    percorrerVagas(vagasDoServidor, (vaga) => {
      console.log(`Análise #${proximaAnalise()}`);
      vaga.exibirVaga();

      const compatibilidade = calcularCompatibilidade(candidata, vaga);
      if (compatibilidade > melhorCompatibilidade) {
        melhorCompatibilidade = compatibilidade;
        melhorVaga = vaga;
      }
      console.log(
        `Compatibilidade: ${compatibilidade}% - Classificação: ${classificarCompatibilidade(compatibilidade)}`,
      );

      const faltantes = listarFaltantes(candidata, vaga);
      if (faltantes.length > 0) {
        console.log(
          `Faltantes para a vaga de ${vaga.cargo}: ${faltantes.join(", ")}`,
        );
      } else {
        console.log(
          `Parabéns! Você possui todas as habilidades para a vaga de ${vaga.cargo}.`,
        );
      }

      for (const habilidade of faltantes) {
        contagemFaltantes[habilidade] = (contagemFaltantes[habilidade] || 0) + 1;
      }
      console.log("=============================");
    });

    if (melhorVaga !== null) {
      console.log(
        `Vaga mais compatível: ${melhorVaga.cargo} (${melhorCompatibilidade}%)`,
      );
    }

    console.log("===== RECOMENDAÇÃO DE ESTUDO =====");
    for (const habilidade in contagemFaltantes) {
      console.log(
        `${habilidade}: falta em ${contagemFaltantes[habilidade]} vaga(s)`,
      );
    }
  } catch (erro) {
    console.log("Erro: " + erro.message);
  }
}

executar();

## Projeto SkillMatch - Simulador de Compatibilidade com Vagas Front-End

O objetivo do projeto SkillMatch é criar um sistema simples que compare as habilidades de um candidato com os requisitos de diferentes vagas. Através dessa análise, o sistema identifica qual vaga possui a maior compatibilidade e indica o que o candidato deve estudar para aumentar suas chances em futuras oportunidades.

# A seguir o que será analisado:

- quais habilidades o candidato possui;
- quais habilidades cada vaga exige;
- quais habilidades estão faltando;
- qual é o percentual de compatibilidade com cada vaga;
- qual vaga possui maior compatibilidade;
- qual recomendação de estudo deve ser dada ao candidato.

# Estrutura do Projeto

● candidato.js: contém os dados da candidata; 
● vagas.js: contém a classe Vaga e as vagas disponíveis;
● skillmatch.js: arquivo principal responsável pela execução do sistema;
● README.md: documentação do projeto.

# O que o sistema faz e para que serve?

O sistema utiliza como base a comparação entre as habilidades exigidas pela vaga e as habilidades que o candidato possui. A compatibilidade é calculada dividindo a quantidade de requisitos atendidos pelo total de requisitos da vaga e multiplicando o resultado por 100.

# Como executá-lo, passo a passo, do zero?

Para executar o projeto, é necessário ter o Node.js instalado. Em seguida, clone o repositório, abra-o no VS Code e acesse a pasta do projeto através do terminal:

cd skillmatch-js

Depois execute:

node skillmatch.js

# Qual regra de cálculo da compatibilidade você adotou e por quê?

Adotei uma regra simples em que o sistema compara os requisitos da vaga com as habilidades técnicas (hard skills) do candidato. Em seguida, divide a quantidade de requisitos atendidos pelo total de requisitos da vaga e multiplica o resultado por 100 para obter o percentual de compatibilidade.

# Qual critério você usou para priorizar as habilidades na recomendação de estudo?

A recomendação de estudos é baseada nas habilidades técnicas que o candidato ainda não possui. O sistema identifica quais requisitos estão faltando e sugere quais tecnologias devem ser estudadas para aumentar a compatibilidade com as demais vagas.

# Quais conceitos do Módulo 01 você aplicou e onde?
● Variáveis e constantes para armazenamento de dados;
● Objetos para representar candidata e vagas;
● Arrays para armazenar listas de habilidades;
● Funções para cálculo de compatibilidade e recomendações;
● Estruturas de repetição com forEach();
● Métodos de arrays como map() e filter();
● Classes para representar os dados do sistema;
● Herança (extends) para criar a classe VagaDetalhada a partir da classe Vaga;
● Importação e exportação de módulos utilizando require() e module.exports;
● Promises e Async/Await para simular o carregamento das vagas.

# Como a internet funciona?
A internet funciona através da comunicação entre dispositivos conectados em rede utilizando protocolos de comunicação, como o TCP/IP. Quando um usuário acessa um sistema, os dados são enviados e recebidos entre cliente e servidor por meio dessa infraestrutura.

# O que é a arquitetura cliente-servidor e como ela aparece no seu projeto?

A arquitetura cliente-servidor é quando o sistema opera de forma dividida. No front-end (cliente), o usuário insere os dados, como nome, habilidades e experiência. No back-end (servidor), é realizada a operação que confere a compatibilidade entre o candidato e as vagas, identifica qual vaga é a mais apropriada e sugere opções de estudo para aprimorar conhecimentos.

Neste projeto, a arquitetura cliente-servidor é simulada utilizando o objeto candidata para representar os dados fornecidos pelo cliente, enquanto o carregamento das vagas simula uma resposta de um servidor através de uma Promise e do uso de Async/Await.

## O link do vídeo de apresentação.

## O link do quadro Kanban.
https://trello.com/b/LrvqKD0W/projeto-skillmatch

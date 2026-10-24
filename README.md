# Projeto_SkillMatch 
SkillMatch JS: Simulador de Compatibilidade com Vaga Front-End Júnior.

O objetivo do projeto é criar um sistema simples que compare as habilidades de uma pessoa candidata com os requisitos de algumas vagas fictícias de front-end júnior.O projeto poderá ser executado usando o Node.js e a aplicação irá analisar os requisitos abaixo:

● quais habilidades o candidato possui;
● quais habilidades cada vaga exige;
● quais habilidades estão faltando;
● qual é o percentual de compatibilidade com cada vaga;
● qual vaga possui maior compatibilidade;
● qual recomendação de estudo deve ser dada ao candidato.

Abaixo seguem algumas outras informações sobre o sistema:

● O que o sistema faz e para que serve?

O sistema verifica, com base nos dados fornecidos pelo candidato, suas experiências e habilidades, e calcula sua compatibilidade com as vagas oferecidas. Com base nesses dados, o setor de RH pode direcioná-lo para a vaga mais adequada ao seu perfil e sugerir o que estudar para melhorar suas chances.

● Como executá-lo, passo a passo, do zero?

Para executar será necessário instalar o node.js,clonar o repositório utilizando o link,entrar na pasta cd skillmatch-js e executar o comando node skillmatch.js.

● Qual regra de cálculo da compatibilidade você adotou e por quê?

Adotei uma regra simples onde verifico entre os requisitos da vaga e as minhas habilidades (hard skills). Pego o que tenho de (habilidades) hard skills, divido pelo que a vaga pede e multiplico por 100 para virar %. Com isso comparo o que falta e indico quais habilidades o candidato precisa estudar para se encaixar nas outras vagas.

● Qual critério você usou para priorizar as habilidades na recomendação de estudo?

Priorizo indicar a habilidades a estudar com base no que falta na vaga com maior compatibilidade, pois seria a mais fácil para o candidato ser contratado, visando aumentar as chances para as próximas vagas.

● Quais conceitos do Módulo 01 você aplicou e onde?





● O que é a arquitetura cliente-servidor e como ela aparece no seu projeto?

A arquitetura cliente-servidor é quando o sistema opera de forma dividida. No front-end (cliente) o usuário insere os dados, como nome, habilidades e experiência. No back-end (servidor) é realizada a operação: ele confere a compatibilidade entre o candidato e as vagas, indica qual vaga é a mais apropriada e sugere opções de estudo para aprimorar conhecimentos.No meu projeto, o cliente coleta o objeto candidato e o servidor cruza com o array vagas e retorna o percentual de match.

● O link do vídeo de apresentação.

● O link do quadro Kanban.
https://trello.com/b/LrvqKD0W/projeto-skillmatch

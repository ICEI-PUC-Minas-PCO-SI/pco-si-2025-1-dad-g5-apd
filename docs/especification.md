**Documentação de Especificação - Projeto Cash Control**

---

## Introdução

O controle financeiro é uma habilidade essencial, mas nem sempre acessível à maioria da população. Em tempos de digitalização, é esperado que ferramentas simples, seguras e funcionais estejam disponíveis para que qualquer pessoa consiga acompanhar suas entradas e saídas de forma prática. O Cash Control surge como uma solução de backend leve e funcional que pode servir como base para sistemas financeiros pessoais ou pequenas soluções empresariais.

Segundo uma pesquisa do SPC Brasil, mais de **48% dos brasileiros não controlam o orçamento mensal**, o que contribui diretamente para o aumento do endividamento e dificuldade de poupar. Além disso, o uso de aplicações de gestão financeira ainda é baixo entre adultos jovens, principal público que enfrenta desafios com gastos variáveis. Portanto, é urgente oferecer soluções simples, integradas e que permitam futuras expansões.

## Problema

Grande parte da população não possui o hábito ou ferramentas adequadas para registrar e visualizar suas transações financeiras de forma simples e segura. A falta de soluções acessíveis e customizáveis dificulta o controle do orçamento, podendo levar ao endividamento.

A aplicação será utilizada em um contexto de gestão financeira pessoal, desenvolvida com tecnologias modernas (Node.js, Fastify, PostgreSQL) e com segurança e flexibilidade no centro da sua arquitetura.

## Objetivos

**Objetivo Geral:**
Desenvolver uma API REST segura e escalável para controle de usuários e suas transações financeiras.

**Objetivos Específicos:**
- Implementar CRUD completo de usuários e transações
- Criar sistema de autenticação JWT e criptografia de senhas
- Garantir regras de acesso por usuário
- Validar dados e tratar erros comuns
- Realizar testes automatizados com Newman e Postman

## Justificativa

A ausência de controle financeiro impacta negativamente a vida de milhões de pessoas. Criar uma API que simplifique essa tarefa, com foco em usabilidade e segurança, contribui para a educação financeira e ainda pode servir como base para aplicações futuras. O projeto também tem valor educacional, por envolver conceitos de backend, autenticação, banco de dados, testes automatizados e segurança da informação.

## Público-Alvo

Usuários de perfil jovem-adulto, estudantes ou trabalhadores autônomos que desejam acompanhar sua vida financeira de forma simples. Possuem conhecimento básico em tecnologia, mas valorizam usabilidade, segurança e integrações com outras ferramentas (futuro frontend ou apps).

---

## Especificações do Projeto

### Personas

**1. Bruno, 24 anos, autônomo:**
Tem dificuldade em controlar o quanto está gastando com pequenas despesas do dia a dia. Gosta de tecnologia, mas quer algo simples, com foco em funcionalidade.

**2. Camila, 31 anos, estágiaria e universitária:**
Controla seus gastos em planilhas. Busca uma solução mais moderna e confiável que permita acessar seus registros de forma rápida e segura.

### Histórias de Usuário

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`|
|--------------------|------------------------------------|-------------------------|
|Usuário autenticado| Registrar uma nova transação       | Controlar meus gastos   |
|Usuário autenticado| Atualizar ou excluir transações     | Corrigir valores errados|
|Novo usuário       | Me cadastrar e logar               | Começar a usar a API    |
|Usuário autenticado| Gerar um relatorio de saldo        | Ter visão geral do mês   |

### Requisitos Funcionais

|ID    | Descrição do Requisito                            | Prioridade |
|------|-----------------------------------------------------|------------|
|RF-001| Criar, ler, atualizar e deletar usuários           | ALTA       |
|RF-002| Registrar transações (entrada e saída)            | ALTA       |
|RF-003| Atualizar e deletar transações                     | ALTA       |
|RF-004| Gerar relatório financeiro por usuário (JSON/CSV)  | MÉDIA      |
|RF-005| Autenticar usuário com JWT                         | ALTA       |

### Requisitos Não Funcionais

|ID     | Descrição do Requisito                              |Prioridade |
|--------|----------------------------------------------------|------------|
|RNF-001| Criptografar senhas com bcrypt                     | ALTA       |
|RNF-002| Tempo de resposta menor que 2 segundos             | MÉDIA      |
|RNF-003| A API deve ser documentada                         | MÉDIA      |
|RNF-004| Garantir que um usuário não acesse dados de outro  | ALTA       |

### Restrições

|ID| Restrição                                              |
|--|--------------------------------------------------------|
|01| O projeto deve ser finalizado até o final do semestre |
|02| Toda a lógica deve estar implementada em Node.js      |

## Arquitetura da Solução

A solução segue o padrão MVC simplificado:

- **Camada de rotas**: Fastify gerencia as requisições HTTP
- **Camada de serviço/modelo**: Prisma ORM conecta ao banco PostgreSQL
- **Middleware**: JWT para autenticação e controle de acesso

## Tecnologias Utilizadas

| Tecnologia    | Função                          |
|---------------|-----------------------------------|
| Node.js       | Execução do backend               |
| Fastify       | Framework web                     |
| Prisma ORM    | Integração com PostgreSQL         |
| PostgreSQL    | Banco de dados relacional         |
| bcryptjs      | Criptografia de senha             |
| JWT           | Autenticação                     |
| Postman/Newman| Testes automatizados              |

## Planejamento do Projeto

### Sprint 1
- _Scrum master_: Matheus
- Backend inicial: Michael
- Modelagem e banco: Arthur
- Testes: André

### Sprint 2
- _Scrum master_: Arthur
- CRUD Usuário: Matheus
- CRUD Transação: Michael
- Testes automatizados: André

### Quadro de tarefas

Atualizado em: 12/06/2025

| Responsável | Tarefa                       | Iniciado | Prazo     | Status | Terminado |
|-------------|------------------------------|----------|-----------|--------|-----------|
| Matheus     | CRUD Usuários e JWT         | 01/06    | 05/06     | ✔️     | 04/06     |
| Michael     | CRUD Transações + CSV        | 02/06    | 08/06     | ✔️     | 08/06     |
| André       | Testes Newman/Postman       | 03/06    | 10/06     | ✔️     | 09/06     |
| Arthur      | Config Banco e Migrations    | 01/06    | 05/06     | ✔️     | 04/06     |

## Processo

O grupo utilizou o GitHub Projects para planejar as tarefas, dividir os papéis e acompanhar a execução. Foram organizadas 2 Sprints, com reuniões semanais para revisão e distribuição das pendências.

## Ferramentas

| Ambiente                    | Plataforma    | Link                            |
|-----------------------------|---------------|----------------------------------|
| Repositório do projeto      | GitHub        | https://github.com/grupo-cashcontrol |
| Documentos do projeto       | Google Docs   | --                             |
| Testes                      | Postman/Newman| --                             |
| Banco de dados              | PgAdmin       | --                             |


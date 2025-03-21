# Introdução

Nos últimos anos, a administração das finanças pessoais tornou-se uma prioridade crescente, especialmente à medida que as pessoas buscam maior controle sobre seus ganhos e despesas. Com a complexidade crescente da vida financeira, o uso de ferramentas digitais para planejamento orçamentário tem se tornado cada vez mais comum. A digitalização acelerada e os impactos da pandemia impulsionaram a adoção de soluções tecnológicas para gestão financeira, aumentando a demanda por aplicativos e plataformas que sejam acessíveis, simples e eficientes, atendendo às necessidades de diferentes perfis de usuários.

O setor de aplicativos financeiros tem registrado um crescimento expressivo, oferecendo diversas soluções para controle de despesas, investimentos e planejamento financeiro. No entanto, muitos desses aplicativos ainda não proporcionam uma experiência totalmente intuitiva e integrada, dificultando a análise detalhada das finanças pessoais. Diante desse cenário, há uma demanda por uma plataforma que alie praticidade, funcionalidade e personalização, permitindo que os usuários registrem suas transações e acessem relatórios detalhados de maneira simples e ágil, otimizando o gerenciamento do seu dinheiro.

## Problema

A organização de tarefas e compromissos diários é um desafio comum para muitas pessoas, especialmente aquelas que possuem rotinas agitadas. A falta de planejamento e a dificuldade em acompanhar prazos podem resultar em atrasos, esquecimentos e baixa produtividade. Apesar da existência de diversas ferramentas de gestão de tempo, muitas delas são complexas ou pouco intuitivas, dificultando a adoção por usuários que buscam soluções mais simples e eficazes.

## Objetivos

Objetivo Geral:
Desenvolver um software para gerenciamento de tarefas que auxilie os usuários na organização do seu dia a dia, aumentando sua produtividade e controle sobre compromissos.

Objetivos Específicos:

Criar uma interface amigável que permita aos usuários cadastrar, editar e visualizar suas tarefas de forma simplificada.

Desenvolver uma API robusta utilizando Node.js para armazenamento seguro de informações.

Implementar recursos como lembretes e categorização de tarefas para melhor organização.

Garantir a acessibilidade e responsividade da plataforma para diferentes dispositivos.

## Justificativa

A falta de planejamento e organização impacta diretamente a produtividade das pessoas, levando a atrasos e perda de compromissos importantes. Estudos apontam que indivíduos que utilizam ferramentas de gestão de tempo conseguem otimizar suas atividades em até 30%. No entanto, muitas soluções existentes são complexas e não atendem às necessidades de usuários que buscam praticidade. Dessa forma, um aplicativo simples e eficiente para gestão de tarefas pode trazer benefícios significativos para diferentes perfis de usuários.

## Público-Alvo

O Cash Control é voltado para universitários que precisam gerenciar melhor suas finanças e para adultos entre 18 e 35 anos que buscam um controle mais eficiente de seus gastos e receitas.
A plataforma oferece uma solução intuitiva e acessível para ajudar esses usuários a organizar suas transações, estabelecer metas financeiras e acompanhar seus hábitos de consumo de forma prática e personalizada.

# Especificações do Projeto

O Cash Control é uma plataforma de gerenciamento financeiro que permite aos usuários registrar, categorizar e acompanhar suas transações financeiras de forma intuitiva. 
Entre suas principais funcionalidades, estão o cadastro e autenticação de usuários, o controle de receitas e despesas, a geração de relatórios personalizados e a visualização de tendências financeiras para uma gestão mais eficiente.
Por meio dessa abordagem estruturada, o Cash Control visa oferecer uma ferramenta prática e confiável para que universitários e jovens adultos possam organizar melhor suas finanças e tomar decisões financeiras mais conscientes.

## Personas

Lucas, 28 anos, programador freelancer
Lucas trabalha por conta própria e recebe pagamentos irregulares. Ele precisa de um aplicativo que permita cadastrar receitas e despesas de forma rápida, categorizando-as para entender seu fluxo de caixa mensal.

Ana, 22 anos, universitária
Ana recebe uma mesada dos pais e tem um estágio remunerado. Seu desafio é controlar os gastos para não ficar sem dinheiro antes do fim do mês. Ela busca um aplicativo simples para acompanhar sua renda e despesas.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Cadastrar minhas receitas e despesas | Controlar melhor minhas finanças     |
|Usuário do sistema  | Categorizar minhas transações      | Facilitar a análise dos meus gastos    |
|Usuário do sistema  | Gerar relatórios financeiros       | Acompanhar meu fluxo de caixa mensal   |
|Usuário do sistema  | Definir metas de economia          | Melhoror planejamento para planos futuros  |
|Usuário do sistema  | 	Acessar a aplicação em diferentes dispositivos   | Ter flexibilidade e praticidade           |
|Administrador       | Monitorar registros do sistema     | Garantir a integridade dos dados       |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| O sistema deve permitir que o usuário crie uma conta e faça login. | ALTA |  
|RF-002| O sistema deve permitir que o usuário altere seus dados cadastrais   | ALTA | 
|RF-003| O sistema deve permitir o cadastro, edição e exclusão de receitas e despesas.   | ALTA |  
|RF-004| O sistema deve permitir que o usuário categorize as transações (alimentação, lazer, contas etc.).  | ALTA | 
|RF-005| O sistema deve exibir um histórico das transações cadastradas, permitindo a filtragem por período, categoria ou tipo.   | MÉDIA |
|RF-006| O sistema deve gerar relatórios financeiros mensais e anuais.   | ALTA | 
|RF-007| O sistema deve permitir que o usuário configure metas financeiras, como limite de gastos mensais por categoria.   | MÉDIA | 
|RF-008| O sistema deve permitir o controle de saldo e orçamento mensal.   | MÉDIA | 
|RF-009| O usuário pode configurar notificações sobre gastos acima do orçamento.  | BAIXA | 
|RF-010| O usuário pode exportar relatórios em PDF ou CSV.   | MÉDIA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva para funcionar em diferentes dispositivos. | ALTA | 
|RNF-002| O tempo de resposta do sistema deve ser inferior a 2 segundos. | MÉDIA | 
|RNF-003| Os dados devem ser armazenados de forma segura utilizando criptografia. | ALTA | 
|RNF-004| O sistema deve oferecer autenticação segura. | ALTA | 
|RNF-005| O sistema deve suportar múltiplos usuários simultaneamente. | MÉDIA | 
|RNF-006| O sistema deve suportar pelo menos 10.000 usuários simultâneos sem degradação do desempenho. | MÉDIA | 
|RNF-007| A aplicação deve utilizar um banco de dados otimizado para consultas rápidas de transações financeiras | ALTA | 
|RNF-008| O sistema deve possuir logs detalhados de erros e atividades dos usuários para auditoria. | MÉDIA | 
|RNF-009| A aplicação deve possuir uma interface intuitiva, garantindo que novos usuários possam navegar sem necessidade de treinamento. | ALTA | 
|RNF-010| O sistema deve permitir backup automático dos dados diariamente. | MÉDIA | 
|RNF-011| A aplicação deve estar em conformidade com a LGPD (Lei Geral de Proteção de Dados) e outras normas de privacidade relevantes. | ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

# Arquitetura da Solução

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![arq](https://github.com/user-attachments/assets/b9402e05-8445-47c3-9d47-f11696e38a3d)

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

# Planejamento do projeto

##  Divisão de papéis

> Apresente a divisão de papéis entre os membros do grupo em cada Sprint. O desejável é que, em cada Sprint, o aluno assuma papéis diferentes na equipe. Siga o modelo do exemplo abaixo:

### Sprint 1
- _Scrum master_: AlunaX
- Protótipos: AlunoY
- Testes: AlunoK
- Documentação: AlunaZ

### Sprint 2
- _Scrum master_: AlunaY
- Desenvolvedor _front-end_: AlunoX
- Desenvolvedor _back-end_: AlunoK
- Testes: AlunaZ

##  Quadro de tarefas

> Apresente a divisão de tarefas entre os membros do grupo e o acompanhamento da execução, conforme o exemplo abaixo.

### Sprint 1

Atualizado em: 21/04/2024

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| AlunaX        | Introdução | 01/02/2024     | 07/02/2024 | ✔️    | 05/02/2024      |
| AlunaZ        | Objetivos    | 03/02/2024     | 10/02/2024 | 📝    |                 |
| AlunoY        | Histórias de usuário  | 01/01/2024     | 07/01/2005 | ⌛     |                 |
| AlunoK        | Personas 1  |    01/01/2024        | 12/02/2005 | ❌    |       |

### Sprint 2

Atualizado em: 21/04/2024

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| AlunaX        | Página inicial   | 01/02/2024     | 07/03/2024 | ✔️    | 05/02/2024      |
| AlunaZ        | CSS unificado    | 03/02/2024     | 10/03/2024 | 📝    |                 |
| AlunoY        | Página de login  | 01/02/2024     | 07/03/2024 | ⌛     |                 |
| AlunoK        | Script de login  |  01/01/2024    | 12/03/2024 | ❌    |       |


Legenda:
- ✔️: terminado
- 📝: em execução
- ⌛: atrasado
- ❌: não iniciado


> **Links úteis**:
> - [11 passos essenciais para implantar Scrum no seu projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

## Processo

Coloque informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
 
> **Links úteis**:
> - [Planejamento e gestão ágil de projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Como criar backlogs no GitHub](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial slack](https://slack.com/intl/en-br/)

## Ferramentas

Liste todas as ferramentas que foram empregadas no projeto, justificando a escolha delas, sempre que possível.

Exemplo: os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| Ambiente                            | Plataforma                         | Link de acesso                         |
|-------------------------------------|------------------------------------|----------------------------------------|
| Repositório de código fonte         | GitHub                             | http://....                            |
| Documentos do projeto               | GitHub                             | http://....                            |
| Projeto de interface                | Figma                              | http://....                            |
| Gerenciamento do projeto            | GitHub Projects                    | http://....                            |
| Hospedagem                          | Vercel                             | http://....                            |
 

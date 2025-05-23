
# Desenvolvimento da Aplicação

## Modelagem da Aplicação
| Camada     | Responsabilidade                                                                 | Principais Pastas       |
|------------|-----------------------------------------------------------------------------------|--------------------------|
| Model      | Representa as entidades do domínio e mapeia-as no PostgreSQL usando o Prisma     | /src/models              |
| Controller | Recebe as requisições HTTP, valida dados, invoca serviços e devolve respostas    | /src/controllers         |
| Service    | Contém a lógica de negócio (ex.: cálculo de saldo diário sugerido, relatórios)   | /src/services            |
| Routes     | Define os endpoints e aplica middlewares (autenticação JWT, validação, etc.)     | /src/routes              |
| Views      | Renderiza as páginas HTML usando templates Handlebars                            | /src/views               |



## Tecnologias Utilizadas

#Back-end:

Node.js

#Front-end:

React

#Banco de Dados:

PostgreSQL


## Programação de Funcionalidades

Requisito Atendido: RF-001 — O sistema deve permitir que o usuário crie uma conta e faça login.

Descrição: Permite ao usuário se cadastrar com nome, e-mail e senha, e fazer login validando as credenciais.




Tecnologias Utilizadas: Node.js | PostgreSQL | Prisma |


------------------------------------------------------------------------------------------------------------------------
Requisito Atendido: RF-002 — O sistema deve permitir que o usuário altere seus dados cadastrais.

Descrição: Permite que o usuário logado atualize seu nome e senha.



Tecnologias Utilizadas: Node.js | PostgreSQL | Prisma |


### Requisitos Atendidos



#### Requisitos Funcionais

| ID     | Descrição do Requisito                                                                 | Responsável | Artefato Criado |
|--------|------------------------------------------------------------------------------------------|-------------|-----------------|
| RF-001 | O sistema deve permitir que o usuário crie uma conta.                                   | Matheus     | routes/user.js         |
| RF-002 | O sistema deve permitir que o usuário faça login.                                       | Michael     | routes/auth.js         |
| RF-003 | O sistema deve permitir que o usuário altere seus dados cadastrais.                     | Matheus/Michael     | routes/users.js         |
| RF-004 | O sistema deve salvar a sessão do usuário com um token após o login.                    | Michael     | routes/auth.js         |
| RF-005 | O sistema deve permitir que o usuário registre novas transações (entrada/saída).        | Matheus     | routes/transactions.js         |
| RF-006 | O sistema deve permitir que o usuário edite suas transações registradas.                | Matheus     | routes/transactions.js         |
| RF-007 | O sistema deve permitir que o usuário exclua uma transação.                             | Matheus     | routes/transactions.js         |
| RF-008 | O sistema deve permitir que o usuário visualize todas as suas transações.               | Matheus     | routes/transactions.js          |
| RF-009 | O sistema deve gerar um relatório com total de entradas, saídas e saldo final.          | Arthur     | routes/relatorios.js         |
| RF-010 | O sistema deve indicar se o saldo do usuário é positivo ou negativo no relatório.       | Arthur     | routes/relatorios.js         |
| RF-011 | O sistema deve gerar relatório em PDF e CSV                                             | André  | routes/relatorios.js         |




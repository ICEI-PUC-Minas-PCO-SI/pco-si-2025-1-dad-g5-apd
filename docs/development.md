
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

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve permitir que o usuário crie uma conta e faça login.| Matheus | Node js|
|RF-002| O sistema deve permitir que o usuário altere seus dados cadastrais. | Matheus| Node js |



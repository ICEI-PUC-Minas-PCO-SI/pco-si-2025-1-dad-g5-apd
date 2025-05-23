
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

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

### Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | João | index.html |
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês | Ana Paula | cadastro-noticia.html |



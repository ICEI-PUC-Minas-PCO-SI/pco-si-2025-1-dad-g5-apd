## Testes

A estratégia de testes do projeto Cash Control foi elaborada para garantir a confiabilidade, integridade e segurança da API desenvolvida. Foram utilizados diferentes tipos de testes para cobrir amplamente os cenários possíveis, considerando desde a unidade de código até testes automatizados de ponta a ponta.

### Tipos de Testes Aplicados

#### 1. Testes Funcionais

- Verificam se cada rota da API funciona corretamente conforme os requisitos especificados.
- Abrangem:
  - Cadastro, leitura, atualização e exclusão de usuários.
  - Cadastro, leitura, atualização e exclusão de transações.
  - Regras de validação (ex: valor negativo, tipo de transação inválido).
  - Respostas esperadas (códigos HTTP 200, 201, 400, 404, 401).

#### 2. Testes de Integração

- Avaliam a comunicação entre o backend (Node.js) e o banco de dados (PostgreSQL via Prisma).
- Validação de relacionamento entre usuários e transações.

#### 3. Testes de Segurança

- Testes com tentativas de SQL Injection.
- Testes de acesso não autorizado a dados de outros usuários (sem token ou token inválido).

#### 4. Testes Automatizados com Postman + Newman

- Criada uma collection completa no Postman, contendo:

  - Casos de sucesso
  - Casos de falha
  - Testes com dados inválidos
  - Testes com ausência de autenticação

- Os testes foram estruturados com **validações automáticas de status code** e mensagens esperadas usando scripts no próprio Postman.

- A collection foi nomeada como `testes-cashcontrol.postman_collection.json`.

- Os testes foram executados com o **Newman** pelo terminal e geraram relatórios HTML.

#### Comando exemplo:

```bash
newman run testes-cashcontrol.postman_collection.json -r html --reporter-html-export resultado.html
```

### Ferramentas Utilizadas

| Ferramenta          | Finalidade                                               |
| ------------------- | -------------------------------------------------------- |
| Postman             | Criação e execução de testes de API                      |
| Newman              | Automação dos testes em linha de comando                 |
| Prisma ORM          | Facilita a integração e validação com banco de dados     |
| JWT                 | Verificação de autenticação/autorização                  |
| Terminal VS Code | Execução dos testes via Newman com geração de relatórios |

### Cobertura de Testes

Os testes cobrem os seguintes aspectos:

- Autenticação: Criação de token, validação de token JWT.
- Regras de acesso: Um usuário não pode acessar ou modificar dados de outro.
- Mensagens de erro: Validação de campos obrigatórios e formatos inválidos.
- Relatórios (CSV/PDF): Geração e verificação da estrutura do retorno (quando implementado).

### Anexos

- **Collection de Testes (Postman):** `testes-cashcontrol.json`
- **Relatório HTML gerado pelo Newman:** `resultado.html`



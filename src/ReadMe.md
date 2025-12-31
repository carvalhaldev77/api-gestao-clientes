API de Gestão de Clientes

API RESTful desenvolvida em Node.js com foco em boas práticas de arquitetura, segurança e organização de código.
O projeto simula um sistema real de gestão de clientes, com autenticação baseada em JWT e controle de acesso.

🎯 Objetivo

Demonstrar domínio prático de:

➜ Desenvolvimento backend com Node.js

➜ Arquitetura REST

➜ Autenticação e autorização

➜ Persistência de dados

➜ Organização de código escalável

➜ Boas práticas de segurança e estruturação


🧱 Tecnologias Utilizadas

⮑ Node.js

⮑ Express

⮑ SQLite

⮑ JWT (JSON Web Token)

⮑ bcryptjs

⮑ Nodemon


📁 Estrutura do Projeto
api-gestao-clientes/
│
├── server.js
├── package.json
├── package-lock.json
│
└── src/
    ├── app.js
    ├── database/
    │   └── database.js
    ├── controllers/
    │   ├── auth.controller.js
    │   └── clients.controller.js
    ├── routes/
    │   ├── auth.routes.js
    │   └── clients.routes.js
    └── middlewares/
        └── auth.middleware.js


▶️ Execução do Projeto

⤷ Instalação de dependências
- npm install

⤷ Inicialização do servidor
- npx nodemon server.js


Servidor disponível em:

http://localhost:3000


🔐 Autenticação

➞ A autenticação é realizada via JWT, garantindo acesso controlado às rotas protegidas.

- Criar usuário
POST /auth/register

- Login
POST /auth/login


O token retornado deve ser enviado no header:

Authorization: Bearer <token>


📦 Rotas Protegidas
- Criar cliente
POST /clients

- Listar clientes
GET /clients


*Todas as rotas de clientes exigem autenticação válida.


🔒 Segurança Implementada

➛ Hash de senhas com bcrypt

➛ Autenticação via JWT

➛ Middleware de proteção de rotas

➛ Separação clara entre camadas da aplicação

➛ Estrutura preparada para escalar


🧩 Próximas Evoluções Planejadas

Validação de dados com Zod

Padronização global de erros

Paginação e filtros

Controle de permissões (roles)

Deploy em ambiente cloud

Documentação Swagger/OpenAPI


👤 Autor

🦅 Gabriel Carvalhal (Carvalhal Dev)
➬ Desenvolvedor Backend em formação
Foco em arquitetura limpa, segurança e escalabilidade.
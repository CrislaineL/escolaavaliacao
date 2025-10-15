# Sistema de Gerenciamento de Turmas e Atividades

Este projeto é uma aplicação web simples para gerenciar turmas e atividades de professores.  
O sistema possui autenticação de login, criação, visualização e exclusão de turmas e atividades.

## Como executar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seuusuario/nome-do-repositorio.git
cd nome-do-repositorio

```
### 2. Iniciar a API
cd api
npm install
npx prisma migrate dev --name init
npm start

```
### 3. Iniciar o front-end
Abra o arquivo index.html dentro da pasta web com o Live Server (VSCode).

#Funcionalidades

.Login de professor
.Cadastro e exclusão de turmas
.Cadastro e exclusão de atividades
.Listagem de turmas e atividades

# Requisitos de infraestrutura


- SGBD: MySQL 8.0 (ou MariaDB compatível)
- Node.js: 18.x ou superior
- Servidor de aplicação: Node.js/Express (não exige servidor adicional)
- Front-end: qualquer servidor estático (p.ex. Live Server, VSCode Live Server, ou abrir arquivo em browser)


## Como testar
1. Clonar repositório

2. Importar `./docs/banco_turmas_db.sql` no seu MySQL

3. Ajustar `api/src/db.js` com usuário/senha

4. `cd api && npm install && npm run dev`

5. Abrir `web/index.html` no browser (ou usar Live Server)
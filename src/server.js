/* Importando o express do node_modules */
const express = require("express");
const routes = require("./routes");

/* Criando uma instância do express para fazer as requisições */
const app = express();

/* Dizendo para o express que as requisições serão feitas em json */
app.use(express.json());

app.use(routes);
/* Constante contendo a porta que será utilizada */
const PORT = 3333;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  
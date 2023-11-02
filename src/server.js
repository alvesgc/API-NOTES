require("express-async-errors");
const database = require("./database/sqlite")
/* Importando o express do node_modules */
const AppError = require("./utils/AppError");
const express = require("express");
const routes = require("./routes");

/* Criando uma instância do express para fazer as requisições */
const app = express();

/* Dizendo para o express que as requisições serão feitas em json */
app.use(express.json());

/* Chamamdo as rotas */
app.use(routes);

database();
/* Tratamento de erros */
app.use( (error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",  
      message: error.message
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  });

});
/* Constante contendo a porta que será utilizada */
const PORT = 3333;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  
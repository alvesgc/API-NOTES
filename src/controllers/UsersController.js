const AppError = require('../utils/AppError');

class UserController {
  create(request, response) {
    const {nome, email, password } = request.body;
    
    if(!nome) {
      throw new AppError("Nome é obrigatório!");
    };
      response.status(201).json( {nome, email, password} );
  };
}

module.exports = UserController;
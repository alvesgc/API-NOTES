const AppError = require('../utils/AppError');

class UserController {
  create(request, response) {
    const {nome, email, password } = request.body;
    
    if(!nome) {
      throw new AppError("Name is required");
    }
    response.status(201).json({ nome, email, password });
  }
}

module.exports = UserController;
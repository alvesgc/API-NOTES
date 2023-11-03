const AppError = require('../utils/AppError');

const sqliteConnection = require('../database/sqlite'); 
class UserController {
  async create(request, response) {
    const {nome, email, password } = request.body;
    
    const database = await sqliteConnection();
    
    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email]); 

    if(checkUserExist) {
      throw new AppError("User already exists");
    }
    awair
    return response.status(201).json()
  };
}

module.exports = UserController;
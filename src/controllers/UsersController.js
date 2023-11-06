const { hash } = require('bcryptjs');
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

    const hashedPassword = await hash(password, 8);
    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [nome, email, hashedPassword]
    );

    return response.status(201).json()
  };

  async update(request, response) {
    const { name , email } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", { id });

    if(!user) {
      throw new AppError("User not found");
    }

    const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", { email });

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== id ) {
      throw new AppError("Email already in use");
    }
  }
}

module.exports = UserController;
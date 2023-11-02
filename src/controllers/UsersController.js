class UserController {
  create(req, res) {
    const { nome, idade, password } = req.body; 
    res.json(nome, idade, password)
  }
};

module.exports = UserController;
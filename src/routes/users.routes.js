const { Router } = require("express");
const usersRouter = Router();

usersRouter.post("/", (req,res) => {
  const { nome, idade, password } = req.body; 
  res.json(nome, idade, password)
 });

 module.exports = usersRouter;
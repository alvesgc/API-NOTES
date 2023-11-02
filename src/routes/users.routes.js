const { Router } = require("express");
const usersRouter = Router();
const UserController = require("../controllers/UsersController")

const userController = new UserController();

usersRouter.post("/", userController.create);

module.exports = usersRouter;
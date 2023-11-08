const { Router } = require("express");
const UserController = require("../controllers/UsersController")
const usersRouter = Router();

const userController = new UserController();

usersRouter.post("/", userController.create);
usersRouter.put("/:id", userController.update)
module.exports = usersRouter;
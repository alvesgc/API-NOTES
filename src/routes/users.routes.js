const { Router } = require("express");
const UserController = require("../controllers/UsersController")
const usersRouter = Router();

const userController = new UserController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

usersRouter.post("/", userController.create);
usersRouter.put("/", ensureAuthenticated,userController.update)
module.exports = usersRouter;
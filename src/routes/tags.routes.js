const { Router } = require("express");
const TagsController = require("../controllers/TagsController")
const tagsRouter = Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsController = new TagsController();

tagsRouter.get("/", ensureAuthenticated, tagsController.index);
module.exports = tagsRouter;
const { Router } = require("express");
const NotesController = require("../controllers/NotesController")
const notesRouter = Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const notesController = new NotesController();

notesRouter.use(ensureAuthenticated);

notesRouter.get("/", notesController.index);
notesRouter.post("/", notesController.create);
notesRouter.get("/:id", notesController.show);
notesRouter.delete("/:id", notesController.delete);
module.exports = notesRouter;
const { Router } = require('express');

const SessionsController = require('../controllers/SessionsController');
const SessionsController = new SessionsController();

const sessionRouter = Router();
sessionRouter.post("/", SessionsController.create);

module.exports = sessionRoutes;
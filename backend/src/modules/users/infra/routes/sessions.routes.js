const { Router } = require('express');

const postSessions = require('../../middleware/validation.sessions');

const SessionsController = require('../controllers/SessionsController');

const sessionsRoutes = Router();
const sessionsController = new SessionsController();

sessionsRoutes.post('/', postSessions(), sessionsController.login);

module.exports = sessionsRoutes;

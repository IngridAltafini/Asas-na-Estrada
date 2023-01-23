const { Router } = require('express');

const {
  postSessions,
  postSessionsSocial,
} = require('../../middleware/validation.sessions');

const SessionsController = require('../controllers/SessionsController');

const sessionsRoutes = Router();
const sessionsController = new SessionsController();

sessionsRoutes.post('/', postSessions(), sessionsController.login);

sessionsRoutes.post(
  '/social',
  postSessionsSocial(),
  sessionsController.loginSocial
);

module.exports = sessionsRoutes;

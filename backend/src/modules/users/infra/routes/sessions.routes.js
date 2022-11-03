const { Router } = require('express');

const postSessions = require('../../middleware/validation.sessions');
const postSessionsSocial = require('../../middleware/validation.social');

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

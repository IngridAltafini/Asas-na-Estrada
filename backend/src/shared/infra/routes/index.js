const { Router } = require('express');

const usersRoutes = require('../../../modules/users/infra/routes/users.routes');
const sessionsRoutes = require('../../../modules/users/infra/routes/sessions.routes');
const forgotRoutes = require('../../../modules/users/infra/routes/forgot.routes');
const resetRoutes = require('../../../modules/users/infra/routes/reset.routes');

const routes = Router();

routes.use('/users', usersRoutes);

routes.use('/login', sessionsRoutes);

routes.use('/forgot', forgotRoutes);

routes.use('/reset', resetRoutes);

module.exports = routes;

const { Router } = require('express');

const usersRoutes = require('../../../modules/users/infra/routes/users.routes');
const sessionsRoutes = require('../../../modules/users/infra/routes/sessions.routes');
const forgotRoutes = require('../../../modules/users/infra/routes/forgot.routes');
const resetRoutes = require('../../../modules/users/infra/routes/reset.routes');
const asasRoutes = require('../../../modules/asas/infra/routes/asas.routes');
const travelsRoutes = require('../../../modules/travels/infra/routes/travels.routes');

const ensureAuthenticated = require('../../../modules/users/middleware/ensure.authenticated');

const routes = Router();

routes.use('/users', usersRoutes);

routes.use('/login', sessionsRoutes);

routes.use('/forgot', forgotRoutes);

routes.use('/reset', resetRoutes);

routes.use(ensureAuthenticated);

routes.use('/asas', asasRoutes);

routes.use('/travels', travelsRoutes);

module.exports = routes;

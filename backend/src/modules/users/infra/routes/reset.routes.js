const { Router } = require('express');

const UsersController = require('../controllers/UsersController');

const patchReset = require('../../middleware/validation.reset');

const resetPasswordRoutes = Router();
const usersController = new UsersController();

resetPasswordRoutes.patch(
  '/:token',
  patchReset(),
  usersController.resetPassword
);

module.exports = resetPasswordRoutes;

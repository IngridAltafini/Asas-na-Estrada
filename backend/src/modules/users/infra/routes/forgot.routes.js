const { Router } = require('express');

const UsersController = require('../controllers/UsersController');

const postForgot = require('../../middleware/validation.forgot');

const forgotRoutes = Router();
const usersController = new UsersController();

forgotRoutes.post('/', postForgot(), usersController.forgotPassword);

module.exports = forgotRoutes;

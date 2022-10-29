const { Router } = require('express');

const UsersController = require('../controllers/UsersController');

const usersMiddleware = require('../../middleware/users.middleware');
const postUsers = require('../../middleware/validation.users');

const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.post(
  '/',
  postUsers(),
  usersMiddleware.verifyIfEmailAlreadyExists,
  usersController.createUsers
);

module.exports = usersRoutes;

const { Router } = require('express');

const multer = require('multer');

const UsersController = require('../controllers/UsersController');

const usersMiddleware = require('../../middleware/users.middleware');
const postUsers = require('../../middleware/validation.users');
const patchUsers = require('../../middleware/validation.updatePicture');
const getUsers = require('../../middleware/validation.getOne');
const updateUsers = require('../../middleware/validation.update');

const ensureAuthenticated = require('../../middleware/ensure.authenticated');

const uploadConfig = require('../../../../config/upload');

const upload = multer(uploadConfig);

const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.post(
  '/',
  postUsers(),
  usersMiddleware.verifyIfEmailAlreadyExists,
  usersController.createUsers
);

usersRoutes.put('/:id', updateUsers(), usersController.updateUsers);

usersRoutes.patch(
  '/:id/avatar',
  patchUsers(),
  ensureAuthenticated,
  upload.single('avatar'),
  usersController.updateUserAvatar
);

usersRoutes.get('/:id', getUsers(), usersController.getOneUsers);

module.exports = usersRoutes;

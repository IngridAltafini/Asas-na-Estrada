const SocialController = require('../controllers/SocialController');

const socialMiddleware = require('../../middleware/social.middleware');

const socialRoutes = Router();
const socialController = new SocialController();

usersRoutes.post(
  '/',
  socialMiddleware.verifyIfEmailAlreadyExists,
  socialController.createSocial
);

module.exports = socialRoutes;

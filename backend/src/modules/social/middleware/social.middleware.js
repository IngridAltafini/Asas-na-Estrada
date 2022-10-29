const SocialRepository = require('../repositories/SocialRepository');

const AppError = require('../../../shared/errors/AppError');

const socialRepository = new SocialRepository();

module.exports = {
  async verifyIfEmailAlreadyExists(request, next) {
    const { email } = request.body;

    const emailExists = await socialRepository.checkUsersEmail(email);

    if (emailExists) throw new AppError('email already exists', 401);

    next();
  },
};

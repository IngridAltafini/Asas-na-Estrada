const UsersRepository = require('../repositories/UsersRepository');

const AppError = require('../../../shared/errors/AppError');

const usersRepository = new UsersRepository();

module.exports = {
  async verifyIfEmailAlreadyExists(request, response, next) {
    const { email } = request.body;

    const emailExists = await usersRepository.checkUsersEmail(email);

    if (emailExists) throw new AppError('email already exists', 401);

    next();
  },
};

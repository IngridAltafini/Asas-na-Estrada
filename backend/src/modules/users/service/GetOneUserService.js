const AppError = require('../../../shared/errors/AppError');

class GetOneUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(userId) {
    const user = await this.usersRepository.getUserById(userId);
    if (!user) throw new AppError('No user found');

    return user;
  }
}

module.exports = GetOneUserService;

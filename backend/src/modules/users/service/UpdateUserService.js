const AppError = require('../../../shared/errors/AppError');

const { generateHash } = require('../../../shared/utils/encrypt');

class UpdateUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(payload) {
    const { password } = payload;

    Object.assign(payload, {
      password: await generateHash(password),
    });

    const user = await this.usersRepository.getUserById(payload.id);
    if (!user) throw new AppError('User not found');

    return this.usersRepository.updatedUser(payload);
  }
}

module.exports = UpdateUserService;

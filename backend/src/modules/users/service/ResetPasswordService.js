const AppError = require('../../../shared/errors/AppError');

const { generateHash } = require('../../../shared/utils/encrypt');

class ResetPasswordService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(payload) {
    const { token, password } = payload;

    const user = await this.usersRepository.getTokenUser(token);
    if (!user) throw new AppError('User not found');

    const passwordHashed = await generateHash(password);

    const data = {
      userId: user.user_id,
      password: passwordHashed,
    };

    const result = await this.usersRepository.updatePasswordAndDeleteToken(
      data
    );

    return result;
  }
}

module.exports = ResetPasswordService;

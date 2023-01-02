const jwt = require('jsonwebtoken');

const AppError = require('../../../shared/errors/AppError');

const { compare, generateHash } = require('../../../shared/utils/encrypt');

class SessionService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(payload) {
    const { email, password } = payload;
    const user = await this.usersRepository.checkUsersEmail(email);
    if (!user) throw new AppError('user not found');

    await compare(password, user.password);

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    delete user.password;

    return {
      token,
      user,
    };
  }

  async social(payload) {
    const { email, name, provider_id } = payload;

    let user = await this.usersRepository.checkUsersEmail(email);
    if (!user) {
      const hashedPassword = await generateHash('12345678');

      //criar usuario
      user = await this.usersRepository.createUser({
        email,
        name,
        password: hashedPassword,
        provider_id,
      });
    }

    const token = jwt.sign({ id: user.provider_id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    return {
      token,
      user,
    };
  }
}

module.exports = SessionService;

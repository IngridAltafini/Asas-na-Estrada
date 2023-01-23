const { generateHash } = require('../../../shared/utils/encrypt');

class CreateUsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(payload) {
    const { password } = payload;

    Object.assign(payload, {
      password: await generateHash(password),
    });

    const user = await this.usersRepository.createUser(payload);

    return user;
  }
}

module.exports = CreateUsersService;

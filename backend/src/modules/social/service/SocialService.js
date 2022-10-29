const { generateHash } = require('../../../shared/utils/encrypt');

class SocialService {
  constructor(socialRepository) {
    this.socialRepository = socialRepository;
  }

  async execute(payload) {
    const { password } = payload;

    Object.assign(payload, {
      password: await generateHash(password),
    });

    const social = await this.socialRepository.createSocial(payload);

    return social;
  }
}

module.exports = SocialService;

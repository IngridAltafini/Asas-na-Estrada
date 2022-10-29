const SocialRepository = require('../../repositories/SocialRepository');

const SocialService = require('../../service/SocialService');

const socialRepository = new SocialRepository();

class SocialController {
  async createSocial(request, response) {
    const { id, email, avatar, name } = request.body;

    const createSocial = new SocialService(socialRepository);

    const social = await createSocial.execute({
      id,
      email,
      avatar,
      name,
      social: true,
    });

    return response.json({ social });
  }
}

module.exports = SocialController;

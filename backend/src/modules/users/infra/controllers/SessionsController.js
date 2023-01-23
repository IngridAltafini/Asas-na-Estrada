const UsersRepository = require('../../repositories/UsersRepository');

const SessionService = require('../../service/SessionService');

const usersRepository = new UsersRepository();

class SessionsController {
  async login(request, response) {
    const sessionService = new SessionService(usersRepository);

    const user = await sessionService.execute(request.body);
    return response.json(user);
  }

  async loginSocial(request, response) {
    const sessionService = new SessionService(usersRepository);

    const social = await sessionService.social(request.body);
    return response.json(social);
  }
}

module.exports = SessionsController;

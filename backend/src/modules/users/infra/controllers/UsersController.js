const UsersRepository = require('../../repositories/UsersRepository');

const MailProvider = require('../../../../shared/providers/MailProvider');

const CreateUsersService = require('../../service/CreateUsersService');
const ForgotPasswordService = require('../../service/ForgotPasswordService');

const usersRepository = new UsersRepository();

class UsersController {
  async createUsers(request, response) {
    const { name, email, telephone, password } = request.body;

    const createUser = new CreateUsersService(usersRepository);

    const user = await createUser.execute({
      name,
      email,
      telephone,
      password,
      social: false,
    });

    return response.json({ user });
  }

  async forgotPassword(request, response) {
    const mailProvider = new MailProvider();

    const forgotPassword = new ForgotPasswordService(
      usersRepository,
      mailProvider
    );

    const { email } = request.body;

    const forgot = await forgotPassword.execute({ email });

    return response.json(forgot);
  }
}

module.exports = UsersController;

const UsersRepository = require('../../repositories/UsersRepository');

const MailProvider = require('../../../../shared/providers/MailProvider');

const CreateUsersService = require('../../service/CreateUsersService');
const ForgotPasswordService = require('../../service/ForgotPasswordService');
const ResetPasswordService = require('../../service/ResetPasswordService');

const usersRepository = new UsersRepository();

class UsersController {
  async createUsers(request, response) {
    const { provider_id, name, email, password } = request.body;

    const createUser = new CreateUsersService(usersRepository);

    const user = await createUser.execute({
      provider_id,
      name,
      email,
      password,
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

  async resetPassword(request, response) {
    const resetPassword = new ResetPasswordService(usersRepository);

    const { token } = request.params;
    const { password } = request.body;

    const result = await resetPassword.execute({
      token,
      password,
    });

    return response.json(result);
  }
}

module.exports = UsersController;

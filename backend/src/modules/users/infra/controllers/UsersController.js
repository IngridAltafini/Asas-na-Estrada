const UsersRepository = require('../../repositories/UsersRepository');

const MailProvider = require('../../../../shared/providers/MailProvider');

const CreateUsersService = require('../../service/CreateUsersService');
const ForgotPasswordService = require('../../service/ForgotPasswordService');

const usersRepository = new UsersRepository();

class UsersController {
  async createUsers(request, response) {
    const { name, age, email, telephone, password, cep } = request.body;

    const createUser = new CreateUsersService(usersRepository);

    const user = await createUser.execute({
      name,
      email,
      telephone,
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

  async getAllUsers(request, response) {
    return response.json({ getAll: true });
  }

  async updateUsers(request, response) {
    return response.json({ update: true });
  }

  async deleteUsers(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = UsersController;

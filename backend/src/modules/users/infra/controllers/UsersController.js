const UsersRepository = require('../../repositories/UsersRepository');

const MailProvider = require('../../../../shared/providers/MailProvider');

const CreateUsersService = require('../../service/CreateUsersService');
const ForgotPasswordService = require('../../service/ForgotPasswordService');
const ResetPasswordService = require('../../service/ResetPasswordService');
const UpdatedUserAvatarService = require('../../service/UpdatedUserAvatarService');
const GetOneUserService = require('../../service/GetOneUserService');
const UpdateUserService = require('../../service/UpdateUserService');

const usersRepository = new UsersRepository();

class UsersController {
  async createUsers(request, response) {
    const { name, email, password } = request.body;

    const createUser = new CreateUsersService(usersRepository);

    const user = await createUser.execute({ name, email, password });

    return response.json(user);
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

  async updateUsers(request, response) {
    const { id } = request.params;

    const payload = {
      id,
      ...request.body,
    };

    const updateUser = new UpdateUserService(usersRepository);

    const userUpdated = await updateUser.execute(payload);

    return response.json(userUpdated);
  }

  async updateUserAvatar(request, response) {
    const updatedAvatar = new UpdatedUserAvatarService(usersRepository);

    const { id } = request.params;

    const updateAvatar = await updatedAvatar.execute({
      id,
      avatarFileName: request.file.filename,
    });

    return response.json(updateAvatar);
  }

  async getOneUsers(request, response) {
    const { id } = request.params;

    const getOne = new GetOneUserService(usersRepository);

    const user = await getOne.execute(id);

    return response.json(user);
  }
}

module.exports = UsersController;

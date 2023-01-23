const path = require('path');
const fs = require('fs');

const AppError = require('../../../shared/errors/AppError');

const uploadConfig = require('../../../config/upload');

class UpdatedUserAvatarService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ id, avatarFileName }) {
    const user = await this.usersRepository.getUserById(id);
    if (!user) throw new AppError('user not found');

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarExists = await fs.promises.stat(userAvatarFilePath);
      if (userAvatarExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    return this.usersRepository.updatedUser({
      id,
      avatar: avatarFileName,
    });
  }
}

module.exports = UpdatedUserAvatarService;

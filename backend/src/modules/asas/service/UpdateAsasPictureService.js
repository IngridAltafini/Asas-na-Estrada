const path = require('path');
const fs = require('fs');

const AppError = require('../../../shared/errors/AppError');

const uploadConfig = require('../../../config/upload');

class UpdateAsasPictureService {
  constructor(asasRepository) {
    this.asasRepository = asasRepository;
  }

  async execute({ id, fileName }) {
    const asa = await this.asasRepository.getOneAsas(id);
    if (!asa) throw new AppError('Asa not found');

    if (asa.picture) {
      const asaPicturePath = path.join(uploadConfig.directory, asa.picture);

      const asaPictureExists = await fs.promises.stat(asaPicturePath);
      if (asaPictureExists) {
        await fs.promises.unlink(asaPicturePath);
      }
    }

    return this.asasRepository.updateAsas({
      id,
      picture: fileName,
    });
  }
}

module.exports = UpdateAsasPictureService;

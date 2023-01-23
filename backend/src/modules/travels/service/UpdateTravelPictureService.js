const path = require('path');
const fs = require('fs');

const AppError = require('../../../shared/errors/AppError');

const uploadConfig = require('../../../config/upload');

class UpdateTravelPictureService {
  constructor(travelsRepository) {
    this.travelsRepository = travelsRepository;
  }

  async execute({ id, fileName }) {
    const travel = await this.travelsRepository.getOneTravels(id);
    if (!travel) throw new AppError('Travel not found');

    if (travel.picture) {
      const travelPicturePath = path.join(
        uploadConfig.directory,
        travel.picture
      );

      const travelPictureExists = await fs.promises.stat(travelPicturePath);
      if (travelPictureExists) {
        await fs.promises.unlink(travelPicturePath);
      }
    }

    return this.travelsRepository.updateTravels({
      id,
      picture: fileName,
    });
  }
}

module.exports = UpdateTravelPictureService;

const AppError = require('../../../shared/errors/AppError');

class UpdateTravelService {
  constructor(travelsRepository) {
    this.travelsRepository = travelsRepository;
  }

  async execute(payload) {
    const travel = await this.travelsRepository.getOneTravels(payload.id);
    if (!travel) throw new AppError('Travel not found');

    return this.travelsRepository.updateTravels(payload);
  }
}

module.exports = UpdateTravelService;

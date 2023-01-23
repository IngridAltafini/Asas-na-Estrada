const AppError = require('../../../shared/errors/AppError');

class DeleteTravelService {
  constructor(travelsRepository) {
    this.travelsRepository = travelsRepository;
  }

  async execute(idTravel) {
    const travel = await this.travelsRepository.getOneTravels(idTravel);
    if (!travel) throw new AppError('Travel not found');

    return this.travelsRepository.deleteTravels(idTravel);
  }
}

module.exports = DeleteTravelService;

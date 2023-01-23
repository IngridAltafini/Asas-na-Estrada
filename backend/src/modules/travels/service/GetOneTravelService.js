const AppError = require('../../../shared/errors/AppError');

class GetOneTravelService {
  constructor(travelsRepository) {
    this.travelsRepository = travelsRepository;
  }

  async execute(idTravel) {
    const travel = await this.travelsRepository.getOneTravels(idTravel);
    if (!travel) throw new AppError('No travel found');

    return travel;
  }
}

module.exports = GetOneTravelService;

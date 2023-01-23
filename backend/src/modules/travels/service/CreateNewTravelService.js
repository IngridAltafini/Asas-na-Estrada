class CreateNewTravelService {
  constructor(travelsRepository) {
    this.travelsRepository = travelsRepository;
  }

  async execute(payload) {
    return this.travelsRepository.createTravels(payload);
  }
}

module.exports = CreateNewTravelService;

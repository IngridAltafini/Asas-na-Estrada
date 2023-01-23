class GetAllTravelService {
  constructor(travelsRepository) {
    this.travelsRepository = travelsRepository;
  }

  async execute() {
    return this.travelsRepository.getAllTravels();
  }
}

module.exports = GetAllTravelService;

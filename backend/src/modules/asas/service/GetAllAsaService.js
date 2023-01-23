class GetAllAsaService {
  constructor(asasRepository) {
    this.asasRepository = asasRepository;
  }

  async execute() {
    return this.asasRepository.getAllAsas();
  }
}

module.exports = GetAllAsaService;

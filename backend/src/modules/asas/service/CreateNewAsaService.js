class CreateNewAsaService {
  constructor(asasRepository) {
    this.asasRepository = asasRepository;
  }

  async execute(payload) {
    return this.asasRepository.createAsas(payload);
  }
}

module.exports = CreateNewAsaService;

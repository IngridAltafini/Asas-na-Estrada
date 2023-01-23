const AppError = require('../../../shared/errors/AppError');

class UpdateAsaService {
  constructor(asasRepository) {
    this.asasRepository = asasRepository;
  }

  async execute(payload) {
    const asa = await this.asasRepository.getOneAsas(payload.id);
    if (!asa) throw new AppError('Asa not found');

    return this.asasRepository.updateAsas(payload);
  }
}

module.exports = UpdateAsaService;

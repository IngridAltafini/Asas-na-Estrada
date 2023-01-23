const AppError = require('../../../shared/errors/AppError');

class DeleteAsaService {
  constructor(asasRepository) {
    this.asasRepository = asasRepository;
  }

  async execute(idAsa) {
    const asa = await this.asasRepository.getOneAsas(idAsa);
    if (!asa) throw new AppError('Asa not found');

    return this.asasRepository.deleteAsas(idAsa);
  }
}

module.exports = DeleteAsaService;

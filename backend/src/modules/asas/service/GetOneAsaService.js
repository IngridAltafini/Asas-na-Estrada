const AppError = require('../../../shared/errors/AppError');

class GetOneAsaService {
  constructor(asasRepository) {
    this.asasRepository = asasRepository;
  }

  async execute(idAsa) {
    const asa = await this.asasRepository.getOneAsas(idAsa);
    if (!asa) throw new AppError('No asa found');

    return asa;
  }
}

module.exports = GetOneAsaService;

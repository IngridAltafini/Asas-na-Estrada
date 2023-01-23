const connection = require('../../../shared/database/connections');

class AsasRepository {
  async createAsas(payload) {
    return connection.transaction(async trx =>
      trx('asas').insert(payload).returning('*')
    );
  }

  async updateAsas(payload) {
    return connection('asas')
      .update(payload)
      .where({ id: payload.id })
      .returning('*');
  }

  async deleteAsas(idAsa) {
    return connection('asas').del().where({ id: idAsa });
  }

  async getAllAsas() {
    return connection('asas');
  }

  async getOneAsas(idAsa) {
    return connection('asas').where({ id: idAsa }).first();
  }
}

module.exports = AsasRepository;

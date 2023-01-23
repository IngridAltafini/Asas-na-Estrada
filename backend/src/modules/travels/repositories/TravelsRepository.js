const connection = require('../../../shared/database/connections');

class TravelsRepository {
  async createTravels(payload) {
    return connection.transaction(async trx =>
      trx('travels').insert(payload).returning('*')
    );
  }

  async updateTravels(payload) {
    return connection('travels')
      .update(payload)
      .where({ id: payload.id })
      .returning('*');
  }

  async deleteTravels(idTravel) {
    return connection('travels').del().where({ id: idTravel });
  }

  async getAllTravels() {
    return connection('travels');
  }

  async getOneTravels(idTravel) {
    return connection('travels').where({ id: idTravel }).first();
  }
}

module.exports = TravelsRepository;

const connection = require('../../../shared/database/connections');

class UsersRepository {
  async checkSocialEmail(email) {
    return connection('users').where({ email }).first();
  }

  async createSocial(payload) {
    return connection.transaction(async trx =>
      trx('users').insert(payload).returning('id')
    );
  }
}

module.exports = UsersRepository;

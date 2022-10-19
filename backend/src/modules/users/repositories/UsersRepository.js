const connection = require('../../../shared/database/connections');

class UsersRepository {
  async checkUsersEmail(email) {
    return connection('users').where({ email }).first();
  }

  async createUser(payload) {
    return connection.transaction(async trx =>
      trx('users').insert(payload).returning('id')
    );
  }

  async saveTokenInDb(payload) {
    return connection.transaction(async trx =>
      trx('users_token').insert(payload).returning('token')
    );
  }
}

module.exports = UsersRepository;

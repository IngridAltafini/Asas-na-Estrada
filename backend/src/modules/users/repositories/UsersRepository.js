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

  async getTokenUser(token) {
    return connection('users_token')
      .join('users', 'users.id', 'users_token.user_id')
      .where({
        token,
      })
      .first();
  }

  async updatePasswordAndDeleteToken(payload) {
    return connection.transaction(async trx => {
      await trx('users')
        .update({
          password: payload.password,
        })
        .where({
          id: payload.userId,
        });

      await trx('users_token').del().where({
        user_id: payload.userId,
      });
    });
  }

  async getUserById(userId) {
    return connection('users').where({ id: userId }).first();
  }

  async updatedUser(payload) {
    return connection('users')
      .update(payload)
      .where({ id: payload.id })
      .returning('*');
  }
}

module.exports = UsersRepository;

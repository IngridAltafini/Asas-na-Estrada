const crypto = require('crypto');

const AppError = require('../../../shared/errors/AppError');

const {
  forgotPassword,
} = require('../../../shared/providers/MailProvider/templates');

class ForgotPasswordService {
  constructor(usersRepository, mailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute({ email }) {
    const user = await this.usersRepository.checkUsersEmail(email);

    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    const token = parseInt(crypto.randomBytes(3).toString('hex'), 16)
      .toString()
      .substring(0, 4);

    const data = {
      user_id: user.id,
      token,
    };

    const forgot = await this.usersRepository.saveTokenInDb(data);

    const message = forgotPassword(user.name, token);

    await this.mailProvider.sendMail({
      email,
      subject: '[Asas na Estrada] Código de segurança',
      template: message,
    });

    return forgot;
  }
}

module.exports = ForgotPasswordService;

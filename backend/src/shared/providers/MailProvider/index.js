const nodemailer = require('nodemailer');

class MailProvider {
  constructor() {
    this.transport = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'cbdf13edc8dbcb',
        pass: 'ea623885d5071a',
      },
    });
  }

  async sendMail({ template, to, subject }) {
    await this.transport.sendMail({
      from: 'NoReply <noreply@asasnaestrada.com.br>',
      to,
      subject,
      html: template,
    });
  }
}

module.exports = MailProvider;

const nodemailer = require('nodemailer');

class MailProvider {
  constructor() {
    this.transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PASS,
      debug: true,
      logger: true,
      tls: {
        secure: false,
        ignoreTLS: true,
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  async sendMail({ template, email, subject }) {
    await this.transport.sendMail({
      from: `NoReply <${process.env.MAIL_URL}>`,
      to: email,
      subject,
      html: template,
    });
  }
}

module.exports = MailProvider;

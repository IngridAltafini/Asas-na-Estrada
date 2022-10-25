const forgotPassword = (name, token) => {
  return (
    `<h3>Olá ${name}!</h3>` +
    `<p></p>` +
    `<p>Seu código de recuperação é: <b>${token}</b>,</p>` +
    `<p>utilize-o no campo especifico para recuperar sua senha.</p>` +
    `<p></p>` +
    `<p><h3>Suporte:</h3></p>` +
    `<p><strong>Email:</strong> asasnaestrada@gmail.com</p>` +
    `<p></p>` +
    `<strong>Equipe Asas na Estrada</strong>`
  );
};

module.exports = { forgotPassword };

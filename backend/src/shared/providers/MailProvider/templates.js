const forgotPassword = (name, token) => {
  return (
    `<h3>Olá ${name}!</h3>` +
    `<p><h3>Recebemos sua solicitação</h3></p>` +
    `<p>Seu código de segurança é: <b>${token}</b>,</p>` +
    `<p>utilize-o no campo especifico para atualizar sua nova senha.</p>` +
    `<p>Se você não solicitou este código, poderá ignorar com segurança este email.</p>` +
    `<p></p>` +
    `<p><h3>Suporte:</h3></p>` +
    `<p><strong>Email:</strong> asasnaestrada@gmail.com</p>` +
    `<p></p>` +
    `<strong>Equipe Asas na Estrada</strong>`
  );
};

module.exports = { forgotPassword };

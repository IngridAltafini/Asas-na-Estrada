const forgotPassword = (name, token) => {
  return (
    `<h3>Olá ${name} !` +
    `<br />` +
    `<p>Vimos que voce esqueceu sua senha, utilize o token: ${token} para resetar a senha</p>` +
    `<br />` +
    `<strong>Equipe Asas na Estrada</strong>`
  );
};

module.exports = { forgotPassword };

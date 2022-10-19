import React from 'react';
import { UserAuth } from '../../context/AuthContext';

import background from '../../assets/background.jpeg';

import { RiFacebookCircleFill } from 'react-icons/ri';

import { FcGoogle } from 'react-icons/fc';

import { Container, Background, Content } from './styles';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  const { GoogleSignIn, FacebookSignIn } = UserAuth();

  const handleFacebookSignIn = async () => {
    try {
      await FacebookSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Background>
        <h1>De moto você não aprecia a paisagem,</h1>
        <h2>Você faz parte dela!</h2>
        <img src={background} alt="imagem complementar" />
      </Background>

      <Content>
        <form>
          <h1>Login:</h1>
          <h2>Realize seu login</h2>

          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <h4>
            Esqueceu sua senha?
            <a href="forgot">Esqueci senha</a>
          </h4>

          <button type="button">Conecte-se</button>

          <h3>ou</h3>

          <button className="btn2" type="button" onClick={handleFacebookSignIn}>
            <RiFacebookCircleFill />
            Continuar com o Facebook
          </button>
          <button className="btn3" type="button" onClick={handleGoogleSignIn}>
            <FcGoogle />
            Continuar com o Google
          </button>
        </form>

        <h4>
          Não faz parte de Asas na estrada?
          <Link to="/sign-up">Cadastre-se</Link>
        </h4>
      </Content>
    </Container>
  );
};

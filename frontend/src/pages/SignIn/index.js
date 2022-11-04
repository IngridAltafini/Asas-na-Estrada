import React from 'react';
import { UserAuth } from '../../context/AuthContext';

import background from '../../assets/background.jpeg';

import { RiFacebookCircleFill } from 'react-icons/ri';

import { FcGoogle } from 'react-icons/fc';

import { Container, Background, Content, BorderForm, Form } from './styles';
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
        <h1>De moto você não</h1>
        <p>aprecia a paisagem,</p>
        <h2>Você faz parte dela!</h2>
        <img src={background} alt="imagem complementar" />
      </Background>

      <Content>
        <BorderForm>
          <Form>
            <h1>Login:</h1>
            <h2>Realize seu login</h2>

            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <h4>
              Esqueceu sua senha?
              <a href="forgot">Esqueci senha</a>
            </h4>

            <button type="submit">Conecte-se</button>

            <p>ou</p>

            <button
              className="btn2"
              type="submit"
              onClick={handleFacebookSignIn}
            >
              <RiFacebookCircleFill />
              Continuar com o Facebook
            </button>
            <button className="btn3" type="submit" onClick={handleGoogleSignIn}>
              <FcGoogle />
              Continuar com o Google
            </button>

            <strong>
              Não faz parte de Asas na estrada?
              <Link to="/sign-up">Cadastre-se</Link>
            </strong>
          </Form>
        </BorderForm>
      </Content>
    </Container>
  );
};

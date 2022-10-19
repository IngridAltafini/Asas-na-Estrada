import React from 'react';
import { UserAuth } from '../../context/AuthContext';

import ReCAPTCHA from 'react-google-recaptcha';

import background from '../../assets/background.jpeg';

import { RiFacebookCircleFill } from 'react-icons/ri';

import { FcGoogle } from 'react-icons/fc';

import { environment } from '../../shared/environment';

import { Container, Background, Content, Box } from './styles';
import { Link } from 'react-router-dom';

export const SignUp = () => {
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
          <h1>Cadastro:</h1>
          <h2>Crie sua conta</h2>

          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Telefone com DDD" />
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="passwprd" placeholder="Confirme sua senha" />
          <Box>
            <ReCAPTCHA
              sitekey={environment.RECAPTCHA_KEY}
              onChange={() => {
                console.log('ok');
              }}
            />
          </Box>
          <button type="button">Continuar</button>

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
          Já possui uma conta em Asas na estrada?
          <Link to="/sign-in">Logar</Link>
        </h4>
      </Content>
    </Container>
  );
};

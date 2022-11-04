import React from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

import background from '../../assets/background.jpeg';

import { environment } from '../../shared/environment';

import {
  Container,
  Background,
  Content,
  BorderForm,
  Form,
  Box,
} from './styles';

import { Link } from 'react-router-dom';

export const SignUp = () => {
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
            <h1>Cadastro:</h1>
            <h2>Crie sua conta</h2>

            <input type="text" placeholder="Nome" />
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

            <button type="submit">Continuar</button>

            <strong>
              Já possui uma conta em Asas na estrada?
              <Link to="/sign-in">Logar</Link>
            </strong>
          </Form>
        </BorderForm>
      </Content>
    </Container>
  );
};

import React from 'react';

import logo from '../../assets/logo.png';
import fundo from '../../assets/fundo.png';

import { Button } from '../../shared/components';

import { Container, Content } from './styles';

export const Welcome = () => {
  return (
    <Container>
      <img src={fundo} alt="imagem complementar" />
      <Content>
        <img src={logo} alt="logo asas na estrada" />

        <h1>Bem vindo(a) ao</h1>
        <h2>Asas na Estrada</h2>

        <h3>Um site criado especialmente</h3>
        <h4>para motoqueiros</h4>

        <strong>Vamos começar</strong>

        <Button className="btn1" type="submit">
          Login
        </Button>
        <Button className="btn2" type="submit">
          Cadastro
        </Button>
      </Content>
    </Container>
  );
};

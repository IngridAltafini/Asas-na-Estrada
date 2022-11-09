import { useCallback } from 'react';

import background from '../../assets/background.jpeg';

import { HiOutlineMail } from 'react-icons/hi';

import { Link } from 'react-router-dom';

import { Form } from '@unform/web';

import { Input, Button } from '../../shared/components';

import { api } from '../../shared/service';

import { Container, Content, Background, BorderForm } from './styles';

export const Forgot = () => {
  const handleSubmit = useCallback(async data => {
    const response = await api.post('/users', data);

    console.log(response);
  }, []);

  return (
    <Container>
      <Content>
        <BorderForm>
          <Form onSubmit={handleSubmit}>
            <h1>Esqueci senha:</h1>
            <h2>Realize sua recuperação </h2>
            <strong>de senha</strong>

            <Input
              name="email"
              icon={HiOutlineMail}
              type="email"
              placeholder="E-mail"
            />

            <Button type="submit">Enviar código</Button>

            <Link to="/sign-in">Voltar</Link>
          </Form>
        </BorderForm>
      </Content>

      <Background>
        <h1>De moto você não</h1>
        <p>aprecia a paisagem,</p>
        <h2>Você faz parte dela!</h2>
        <img src={background} alt="imagem complementar" />
      </Background>
    </Container>
  );
};

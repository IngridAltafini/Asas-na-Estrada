import { useCallback } from 'react';

import { UserAuth } from '../../context/AuthContext';

import background from '../../assets/background.jpeg';

import { RiFacebookCircleFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail } from 'react-icons/hi';
import { BiLockAlt } from 'react-icons/bi';

import { Link } from 'react-router-dom';

import { Form } from '@unform/web';

import { Input, Button } from '../../shared/components';

import { api } from '../../shared/service';

import { Container, Background, Content, BorderForm } from './styles';

export const SignIn = () => {
  const handleSubmit = useCallback(async data => {
    const response = await api.post('/users', data);

    console.log(response);
  }, []);

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
          <Form onSubmit={handleSubmit}>
            <h1>Login:</h1>
            <h2>Realize seu login</h2>

            <Input
              name="email"
              icon={HiOutlineMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={BiLockAlt}
              type="password"
              placeholder="Senha"
            />
            <h4>
              Esqueceu sua senha?
              <Link to="/forgot">Esqueci senha</Link>
            </h4>

            <Button type="submit">Conecte-se</Button>

            <p>ou</p>

            <Button
              className="btn2"
              type="submit"
              onClick={handleFacebookSignIn}
            >
              <RiFacebookCircleFill />
              Continuar com o Facebook
            </Button>
            <Button className="btn3" type="submit" onClick={handleGoogleSignIn}>
              <FcGoogle />
              Continuar com o Google
            </Button>

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

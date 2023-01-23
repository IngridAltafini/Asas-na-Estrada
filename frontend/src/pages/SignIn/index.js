import { useCallback, useRef } from 'react';

import { useAuth } from '../../shared/context/AuthContext';
import { useToast } from '../../shared/context/ToastContext';

import background from '../../assets/background.jpeg';

import { RiFacebookCircleFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail } from 'react-icons/hi';
import { MdPassword } from 'react-icons/md';

import { Link, useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import { Input, Button } from '../../shared/components';

import getValidationErrors from '../../shared/utils/getValidationErrors';

import { Container, Background, Content, BorderForm } from './styles';

export const SignIn = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const { signIn, facebookSignIn, googleSignIn } = useAuth();

  const handleFacebookSignIn = useCallback(
    async data => {
      try {
        const { email, name, provider_id } = data;

        await facebookSignIn({ email, name, provider_id });

        addToast({
          type: 'success',
          title: 'Sucesso ao logar!',
          description: 'Aproveite nossa plataforma.',
        });

        navigate('/home');
      } catch (err) {
        throw new Error(err.message);
      }
    },
    [facebookSignIn, addToast, navigate]
  );

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail é obrigatório'),
          password: Yup.string()
            .min(8, 'Mínimo de 8 caracteres')
            .required('Senha é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        const { email, password } = data;

        await signIn({ email, password });

        addToast({
          type: 'success',
          title: 'Sucesso ao logar!',
          description: 'Aproveite nossa plataforma.',
        });

        navigate('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err);

          formRef.current.setErrors(error);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao logar!',
          description: 'Por favor, verifique seus dados.',
        });
      }
    },
    [signIn, navigate, addToast]
  );

  const handleGoogleSignIn = useCallback(
    async data => {
      try {
        const { email, name, provider_id } = data;

        await googleSignIn({ email, name, provider_id });

        addToast({
          type: 'success',
          title: 'Sucesso ao logar!',
          description: 'Aproveite nossa plataforma.',
        });

        navigate('/home');
      } catch (err) {
        throw new Error(err.message);
      }
    },
    [googleSignIn, addToast, navigate]
  );

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
          <Form ref={formRef} onSubmit={handleSubmit}>
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
              icon={MdPassword}
              type="password"
              placeholder="Senha"
            />
            <h4>
              Esqueceu sua senha?
              <Link to="/forgot">Esqueci senha</Link>
            </h4>

            <Button type="submit">Logar</Button>

            <p>ou</p>

            <Button
              className="btn2"
              type="button"
              onClick={handleFacebookSignIn}
            >
              <RiFacebookCircleFill />
              Continuar com o Facebook
            </Button>
            <Button className="btn3" type="button" onClick={handleGoogleSignIn}>
              <FcGoogle />
              Continuar com o Google
            </Button>

            <strong>
              Não faz parte de Asas na Estrada?
              <Link to="/sign-up">Cadastre-se</Link>
            </strong>
          </Form>
        </BorderForm>
      </Content>
    </Container>
  );
};

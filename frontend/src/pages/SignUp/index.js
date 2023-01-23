import { useCallback, useRef } from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

import { HiOutlineMail } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';
import { MdPassword } from 'react-icons/md';

import { Link, useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import background from '../../assets/background.jpeg';

import { Input, Button } from '../../shared/components';

import { useToast } from '../../shared/context/ToastContext';

import { environment } from '../../shared/environment';

import getValidationErrors from '../../shared/utils/getValidationErrors';

import { createUsers } from '../../api/Api';

import { Container, Background, Content, BorderForm, Box } from './styles';

export const SignUp = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string().required('E-mail é obrigatório'),
          password: Yup.string()
            .min(8, 'Mínimo de 8 caracteres')
            .required('Senha é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await createUsers(data);

        addToast({
          type: 'success',
          title: 'Usuário criado!',
          description: 'Cadastro de usuário realizado com sucesso.',
        });

        navigate('/sign-in');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao cadastrar!',
          description: 'Por favor, verifique seus dados.',
        });
      }
    },
    [navigate, addToast]
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
            <h1>Cadastro:</h1>
            <h2>Crie sua conta</h2>

            <Input name="name" type="text" icon={BiUser} placeholder="Nome" />
            <Input
              name="email"
              type="email"
              icon={HiOutlineMail}
              placeholder="E-mail"
            />
            <Input
              name="password"
              type="password"
              icon={MdPassword}
              placeholder="Senha"
            />

            <Box>
              <ReCAPTCHA
                sitekey={environment.RECAPTCHA_KEY}
                onChange={() => {
                  console.log('ok');
                }}
              />
            </Box>

            <Button type="submit">Continuar</Button>

            <strong>
              Já possui uma conta em Asas na Estrada?
              <Link to="/sign-in">Logar</Link>
            </strong>
          </Form>
        </BorderForm>
      </Content>
    </Container>
  );
};

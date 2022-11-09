import { useCallback, useRef } from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

import { HiOutlineMail } from 'react-icons/hi';
import { TbEdit } from 'react-icons/tb';
import { BiLockAlt, BiLockOpenAlt } from 'react-icons/bi';

import { Link } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import background from '../../assets/background.jpeg';

import { Input, Button } from '../../shared/components';

import { environment } from '../../shared/environment';

import getValidationErrors from '../../shared/utils/getValidationErrors';

//import { api } from '../../shared/service';

import { Container, Background, Content, BorderForm, Box } from './styles';

export const SignUp = () => {
  const formRef = useRef(null);
  const handleSubmit = useCallback(async data => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .email('Digite um email válido')
          .required('Email é obrigatório'),
        password: Yup.string()
          .required('Senha é obrigatória')
          .min(8, 'Mínimo de 8 caracteres'),
        confirmPassword: Yup.string().required(
          'Confirmação de senha é obrigatório'
        ),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }

    // const response = await api.post('/users', data);

    //console.log(response);
  }, []);

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

            <Input name="name" type="text" icon={TbEdit} placeholder="Nome" />
            <Input
              name="email"
              type="email"
              icon={HiOutlineMail}
              placeholder="E-mail"
            />
            <Input
              name="password"
              type="password"
              icon={BiLockAlt}
              placeholder="Senha"
            />
            <Input
              name="confirmPassword"
              type="password"
              icon={BiLockOpenAlt}
              placeholder="Confirme sua senha"
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
              Já possui uma conta em Asas na estrada?
              <Link to="/sign-in">Logar</Link>
            </strong>
          </Form>
        </BorderForm>
      </Content>
    </Container>
  );
};

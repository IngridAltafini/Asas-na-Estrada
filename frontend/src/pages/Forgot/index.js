import { useCallback, useRef, useState } from 'react';

import background from '../../assets/background.jpeg';

import { HiOutlineMail } from 'react-icons/hi';

import { Link, useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import { useToast } from '../../shared/context/ToastContext';

import { forgotPassword } from '../../api/Api';

import { Input, Button, Loading } from '../../shared/components';

import getValidationErrors from '../../shared/utils/getValidationErrors';

import { Container, Content, Background, BorderForm } from './styles';

export const Forgot = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        setIsLoading(true);

        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail é obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        const { email } = data;

        await forgotPassword(email);

        addToast({
          type: 'success',
          title: 'Código enviado!',
          description: 'Por favor, verifique sua caixa de entrada.',
        });

        setIsLoading(false);

        navigate('/reset');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Código não enviado!',
          description: 'Por favor, verifique seus dados.',
        });
      }
    },
    [navigate, addToast]
  );

  return (
    <Container>
      <Content>
        <BorderForm>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Esqueci senha:</h1>
            <h2>Realize sua redefinição </h2>
            <strong>de senha</strong>

            <Input
              name="email"
              icon={HiOutlineMail}
              type="email"
              placeholder="E-mail"
            />

            {isloading ? (
              <Loading />
            ) : (
              <Button type="submit">Enviar código</Button>
            )}

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

import { useCallback, useRef, useState } from 'react';

import background from '../../assets/background.jpeg';

import { TbMessage2Code } from 'react-icons/tb';
import { MdPassword } from 'react-icons/md';

import { Link, useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import { useToast } from '../../shared/context/ToastContext';

import { resetPassword } from '../../api/Api';

import { Input, Button, Loading } from '../../shared/components';

import getValidationErrors from '../../shared/utils/getValidationErrors';

import { Container, Content, Background, BorderForm } from './styles';

export const Reset = () => {
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
          token: Yup.string()
            .min(4, 'Mínimo de 4 caracteres')
            .required('Código obrigatório'),
          password: Yup.string()
            .min(8, 'Mínimo de 8 caracteres')
            .required('Senha é obrigatória'),
          confirmPassword: Yup.string()
            .min(8, 'Mínimo de 8 caracteres')
            .required('Confirmação de senha é obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        const { password, confirmPassword, token } = data;

        if (password !== confirmPassword) {
          addToast({
            type: 'error',
            title: 'Senhas não compativeis!',
            description: 'Por favor, verifique seus dados.',
          });

          return;
        }

        await resetPassword({ token, password });

        addToast({
          type: 'success',
          title: 'Senha redefinida!',
          description: 'Redefinição de senha realizada com sucesso.',
        });

        setIsLoading(false);

        navigate('/sign-in');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao redefinir senha!',
          description: 'Por favor, verifique seus dados.',
        });
      }
    },
    [addToast, navigate]
  );

  return (
    <Container>
      <Content>
        <BorderForm>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Nova senha:</h1>
            <h2>Atualize sua senha</h2>

            <Input
              name="token"
              icon={TbMessage2Code}
              type="text"
              placeholder="Código"
            />

            <br />

            <Input
              name="password"
              icon={MdPassword}
              type="password"
              placeholder="Nova senha"
            />

            <Input
              name="confirmPassword"
              icon={MdPassword}
              type="password"
              placeholder="Confirme sua nova senha"
            />

            {isloading ? (
              <Loading />
            ) : (
              <Button type="submit">Atualizar senha</Button>
            )}

            <Link to="/forgot">Voltar</Link>
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

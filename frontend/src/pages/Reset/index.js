import { useCallback, useRef } from 'react';

import background from '../../assets/background.jpeg';

import { TbMessage2Code } from 'react-icons/tb';
import { BiLockAlt, BiLockOpenAlt } from 'react-icons/bi';

import { Link } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import { Input, Button } from '../../shared/components';

//import { api } from '../../shared/service';

import getValidationErrors from '../../shared/utils/getValidationErrors';

import { Container, Content, Background, BorderForm } from './styles';

export const Reset = () => {
  const formRef = useRef(null);
  const handleSubmit = useCallback(async data => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        token: Yup.string()
          .min(4, 'Mínimo de 4 caracteres')
          .required('Código obrigatório'),
        password: Yup.string()
          .min(8, 'Mínimo de 8 caracteres')
          .required('Senha é obrigatória'),
        confirmPassword: Yup.string().required('Confirmação obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current.setErrors(errors);
    }

    // const response = await api.post('/users', data);
    //console.log(response);
  }, []);

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
              icon={BiLockAlt}
              type="password"
              placeholder="Nova senha"
            />

            <Input
              name="confirmPassword"
              icon={BiLockOpenAlt}
              type="password"
              placeholder="Confirme sua nova senha"
            />

            <Button type="submit">Atualizar senha</Button>

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

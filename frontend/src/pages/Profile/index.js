import { useState, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { editUsers } from '../../api/Api';

import * as Yup from 'yup';

import { environment } from '../../shared/environment';

import { useToast } from '../../shared/context/ToastContext';

import { Button, Input } from '../../shared/components';

import { Container, FormContent, Title } from './styles';
import { MdPassword } from 'react-icons/md';
import getValidationErrors from '../../shared/utils/getValidationErrors';
import { Form } from '@unform/web';
import { HiOutlineMail } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';

export const Profile = () => {
  const formRef = useRef(null);

  const { addToast } = useToast();

  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const userData = JSON.parse(localStorage.getItem(environment.APP_NAME));

    return userData.user;
  });

  const handleSubmit = async data => {
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

      Object.assign(data, { id: user.id });

      await editUsers(data);

      addToast({
        type: 'success',
        title: 'Atualização de usuário!',
        description: 'Atualização realizada com sucesso.',
      });

      navigate('/profiles');
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
  };

  return (
    <Container>
      <Title>
        <h2>Olá {user.name}, aqui estão os detalhes de seu perfil </h2>
      </Title>

      <FormContent>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={user}>
          <Input name="name" icon={BiUser} type="text" placeholder="Nome" />

          <Input
            name="email"
            icon={HiOutlineMail}
            type="email"
            placeholder="Email"
          />

          <Input
            name="password"
            icon={MdPassword}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit" style={{ marginTop: '16px', width: '20%' }}>
            Salvar
          </Button>
        </Form>
      </FormContent>
    </Container>
  );
};

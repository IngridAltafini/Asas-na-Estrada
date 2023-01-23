import { useCallback, useRef, useState, useEffect } from 'react';

import { useLocation, useParams, useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import { ContentBaseLayout } from '../../../shared/layouts/ContentBaseLayout';
import { FormActions, Input, Button } from '../../../shared/components';
import { useToast } from '../../../shared/context/ToastContext';

import getValidationErrors from '../../../shared/utils/getValidationErrors';

import {
  createTravels,
  updateAvatarTravels,
  getTravelsDetails,
  editTravels,
} from '../../../api/Api';

import {
  MdOutlinePhotoCamera,
  MdOutlineDriveFileRenameOutline,
  MdPhoneInTalk,
} from 'react-icons/md';
import { BiWorld, BiSearchAlt } from 'react-icons/bi';

import { Container, FormContent, AsaContainer } from './styles';
import { environment } from '../../../shared/environment';

export const TravelsDetails = () => {
  const formRef = useRef(null);

  const { addToast } = useToast();

  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();
  const { option } = location.state;

  const [travelPicture, setTravelPicture] = useState('');
  const [travelPicturePayload, setTravelPicturePayload] = useState();
  const [travel, setTravel] = useState();

  const handleBack = useCallback(() => {
    navigate('/travels');
  }, [navigate]);

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          state: Yup.string().required('Estado é obrigatório'),
          city: Yup.string().required('Cidade é obrigatória'),
          type: Yup.string().required('Tipo é obrigatório'),
          name: Yup.string().required('Nome do ponto é obrigatório'),
          address: Yup.string().required('Endereço do ponto é obrigatório'),
          contact: Yup.string().required('Contato do ponto é obrigatório'),
          description: Yup.string().required(
            'Descrição do ponto é obrigatória'
          ),
        });

        await schema.validate(data, { abortEarly: false });

        let travel;
        switch (option) {
          case 1: {
            travel = await createTravels(data);

            addToast({
              type: 'success',
              title: 'Cadastro realizado!',
              description: 'Sucesso ao cadastrar.',
            });

            break;
          }

          case 2: {
            Object.assign(data, { id });

            travel = await editTravels(data);

            addToast({
              type: 'success',
              title: 'Edição realizada!',
              description: 'Sucesso ao editar.',
            });

            break;
          }

          default:
        }

        if (travelPicturePayload) {
          await updateAvatarTravels({
            id: travel.id,
            data: travelPicturePayload,
          });
        }

        navigate('/travels');
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
    [addToast, travelPicturePayload, navigate, id, option]
  );

  const handlePictureChange = useCallback(event => {
    setTravelPicture(URL.createObjectURL(event.target.files[0]));

    const data = new FormData();
    data.append('picture', event.target.files[0]);

    setTravelPicturePayload(data);
  }, []);

  const handleGetAsaDetails = useCallback(async () => {
    const result = await getTravelsDetails(id);

    setTravel(result);
    setTravelPicture(environment.API_URL + '/files/' + result.picture);
  }, [id, setTravelPicture]);

  useEffect(() => {
    if (id !== 'new') {
      handleGetAsaDetails();
    }
  }, [handleGetAsaDetails, id]);

  return (
    <ContentBaseLayout
      title={
        option === 1
          ? 'Cadastro de um novo ponto turístico'
          : 'Detalhes do ponto turístico'
      }
      toolbar={<FormActions handleBack={handleBack} />}
    >
      <Container>
        <h1>Formulário de cadastro</h1>

        <FormContent>
          <Form ref={formRef} onSubmit={handleSubmit} initialData={travel}>
            <Input
              name="state"
              icon={BiWorld}
              type="text"
              placeholder="Estado"
              disabled={option === 4 ? true : false}
            />

            <Input
              name="city"
              icon={BiWorld}
              type="text"
              placeholder="Cidade"
              disabled={option === 4 ? true : false}
            />

            <Input
              name="type"
              icon={MdOutlineDriveFileRenameOutline}
              type="text"
              placeholder="Tipo EX: Restaurante"
              disabled={option === 4 ? true : false}
            />

            <Input
              name="name"
              icon={MdOutlineDriveFileRenameOutline}
              type="text"
              placeholder="Nome do ponto turístico"
              disabled={option === 4 ? true : false}
            />

            <Input
              name="address"
              icon={BiSearchAlt}
              type="text"
              placeholder="Endereço do ponto turístico"
              disabled={option === 4 ? true : false}
            />

            <Input
              name="contact"
              icon={MdPhoneInTalk}
              type="text"
              placeholder="Contato do ponto turístico"
              disabled={option === 4 ? true : false}
            />

            <Input
              name="description"
              icon={MdOutlineDriveFileRenameOutline}
              type="text"
              placeholder="Descrição do ponto turístico"
              disabled={option === 4 ? true : false}
            />

            <Button type="submit" style={{ marginTop: '16px', width: '20%' }}>
              Salvar
            </Button>
          </Form>

          <AsaContainer>
            {travelPicture && <img src={travelPicture} alt="moto" />}

            <label htmlFor="picture">
              <MdOutlinePhotoCamera />

              <input type="file" id="picture" onChange={handlePictureChange} />
            </label>
          </AsaContainer>
        </FormContent>
      </Container>
    </ContentBaseLayout>
  );
};

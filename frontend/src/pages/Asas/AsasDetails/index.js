import { useCallback, useRef, useState, useEffect } from 'react';

import { useLocation, useParams, useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import { ContentBaseLayout } from '../../../shared/layouts/ContentBaseLayout';
import { FormActions, Input, Select, Button } from '../../../shared/components';
import { useToast } from '../../../shared/context/ToastContext';

import getValidationErrors from '../../../shared/utils/getValidationErrors';

import {
  createAsas,
  updateAvatarAsas,
  getAsasDetails,
  editAsas,
} from '../../../api/Api';

import { FaMotorcycle } from 'react-icons/fa';
import { IoMdColorPalette } from 'react-icons/io';
import { MdDateRange, MdOutlinePhotoCamera } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';

import { Container, FormContent, AsaContainer } from './styles';
import { environment } from '../../../shared/environment';

export const AsasDetails = () => {
  const formRef = useRef(null);

  const { addToast } = useToast();

  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();
  const { option } = location.state;

  const [asaPicture, setAsaPicture] = useState('');
  const [asaPicturePayload, setAsaPicturePayload] = useState();
  const [asa, setAsa] = useState();

  const handleBack = useCallback(() => {
    navigate('/asas');
  }, [navigate]);

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          model: Yup.string().required('modelo é obrigatório'),
          color: Yup.string().required('Cor é obrigatória'),
          fabrication: Yup.number().required('Ano de fabricação é obrigatório'),
          travel: Yup.string().required(
            'Se você já viajou ou não é obrigatório'
          ),
        });

        await schema.validate(data, { abortEarly: false });

        let asa;
        switch (option) {
          case 1: {
            asa = await createAsas(data);

            addToast({
              type: 'success',
              title: 'Cadastro realizado!',
              description: 'Sucesso ao cadastrar.',
            });

            break;
          }

          case 2: {
            Object.assign(data, { id });

            asa = await editAsas(data);

            addToast({
              type: 'success',
              title: 'Edição realizada!',
              description: 'Sucesso ao editar.',
            });

            break;
          }

          default:
        }

        if (asaPicturePayload) {
          await updateAvatarAsas({ id: asa.id, data: asaPicturePayload });
        }

        navigate('/asas');
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
    [addToast, asaPicturePayload, navigate, id, option]
  );

  const handlePictureChange = useCallback(event => {
    setAsaPicture(URL.createObjectURL(event.target.files[0]));

    const data = new FormData();
    data.append('picture', event.target.files[0]);

    setAsaPicturePayload(data);
  }, []);

  const handleGetAsaDetails = useCallback(async () => {
    const result = await getAsasDetails(id);

    setAsaPicture(environment.API_URL + '/files/' + result.picture);

    Object.assign(result, {
      travel: result.travel
        ? { value: true, label: 'Sim' }
        : { value: false, label: 'Não' },
    });

    setAsa(result);
  }, [id, setAsaPicture]);

  useEffect(() => {
    if (id !== 'new') {
      handleGetAsaDetails();
    }
  }, [handleGetAsaDetails, id]);

  return (
    <ContentBaseLayout
      title={option === 1 ? 'Cadastro de uma nova moto' : 'Detalhes da moto'}
      toolbar={<FormActions handleBack={handleBack} />}
    >
      <Container>
        <h1>Formulário de cadastro</h1>

        <FormContent>
          <Form ref={formRef} onSubmit={handleSubmit} initialData={asa}>
            <Input
              name="model"
              icon={FaMotorcycle}
              type="text"
              placeholder="Modelo da sua moto"
              disabled={option === 4 ? true : false}
            />

            <Input
              name="color"
              icon={IoMdColorPalette}
              type="text"
              placeholder="Cor da sua moto"
              disabled={option === 4 ? true : false}
            />

            <Input
              name="fabrication"
              icon={MdDateRange}
              type="number"
              placeholder="Ano de fabricação da sua moto"
              disabled={option === 4 ? true : false}
            />

            {option !== 4 ? (
              <Select
                name="travel"
                placeholder="Já viajou com ela?"
                options={[
                  { value: true, label: 'Sim' },
                  { value: false, label: 'Não' },
                ]}
                disabled={option === 4 ? true : false}
              />
            ) : (
              <Input
                name="travel"
                icon={BiWorld}
                type="text"
                value={asa?.travel.value ? 'Sim' : 'Não'}
                disabled={option === 4 ? true : false}
              />
            )}

            <Button type="submit" style={{ marginTop: '16px', width: '20%' }}>
              Salvar
            </Button>
          </Form>

          <AsaContainer>
            {asaPicture && <img src={asaPicture} alt="moto" />}

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

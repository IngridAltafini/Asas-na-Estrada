import { useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { FiEdit, FiEye, FiTrash2 } from 'react-icons/fi';

import { ContentBaseLayout } from '../../shared/layouts/ContentBaseLayout';

import { ListToolbar, DeleteModal } from '../../shared/components';

import { getTravels, deleteTravels } from '../../api/Api';

import { environment } from '../../shared/environment';
import { useToast } from '../../shared/context/ToastContext';

import { Container, ActionsButton, ImageTravel } from './styles';

export const Travels = () => {
  const { addToast } = useToast();

  const [travels, setTravels] = useState([]);
  const [travelId, setTravelId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleSearch = useCallback(() => {
    console.log('TRAVELS - handleSearch');
  }, []);

  const handleDetails = useCallback(
    (id, option) => {
      navigate(`/travels/details/${id}`, { state: { option } });
    },
    [navigate]
  );

  const getAllTravels = useCallback(async () => {
    const result = await getTravels();

    const formatedResult = result.map(item => {
      return {
        ...item,
      };
    });

    setTravels(formatedResult);

    setRefresh(false);
  }, []);

  const handleDeleteTravel = useCallback(async () => {
    await deleteTravels(travelId);

    setRefresh(true);
    setTravelId(null);
    setOpenDeleteModal(false);

    addToast({
      type: 'success',
      title: 'Exclusão realizada!',
      description: 'Cadastro de pontos turísticos excluído com sucesso.',
    });
  }, [travelId, addToast]);

  const handleCancelDelete = useCallback(() => {
    setOpenDeleteModal(false);
  }, []);

  const handleOpenModal = useCallback(id => {
    setTravelId(id);
    setOpenDeleteModal(true);
  }, []);

  useEffect(() => {
    getAllTravels();
  }, [getAllTravels, refresh]);

  return (
    <ContentBaseLayout
      title="Cadastro de pontos turísticos"
      toolbar={
        <ListToolbar handleSearch={handleSearch} handleNew={handleDetails} />
      }
    >
      <Container>
        {openDeleteModal && (
          <DeleteModal
            title="Exclusão de cadastro"
            description="Seu cadastro de pontos turísticos será excluído permanentemente, deseja continuar?"
            handleDelete={handleDeleteTravel}
            handleCancel={handleCancelDelete}
          />
        )}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#F33C2A', fontWeight: 'bold' }}>
                  Ações
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  --
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  Estado
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  Cidade
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  Tipo
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  Nome
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  Endereço
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  Contato
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  Descrição
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {travels.map(travel => (
                <TableRow key={travel.id}>
                  <TableCell align="left">
                    <ActionsButton>
                      <button
                        type="button"
                        onClick={() => handleDetails(travel.id, 2)}
                      >
                        <FiEdit />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDetails(travel.id, 4)}
                      >
                        <FiEye />
                      </button>

                      <button onClick={() => handleOpenModal(travel.id)}>
                        <FiTrash2 />
                      </button>
                    </ActionsButton>
                  </TableCell>
                  <TableCell align="center">
                    <ImageTravel
                      src={
                        travel.picture
                          ? `${environment.API_URL}/files/${travel.picture}`
                          : `https://ui-avatars.com/api/?font-size=0.33&background=D3D3D3&color=fff&name=${travel?.name}`
                      }
                    />
                  </TableCell>
                  <TableCell align="center">{travel.state}</TableCell>
                  <TableCell align="right">{travel.city}</TableCell>
                  <TableCell align="center">{travel.type}</TableCell>
                  <TableCell align="center">{travel.name}</TableCell>
                  <TableCell align="center">{travel.address}</TableCell>
                  <TableCell align="right">{travel.contact}</TableCell>
                  <TableCell align="right">{travel.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </ContentBaseLayout>
  );
};

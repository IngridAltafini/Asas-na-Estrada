import { useCallback, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { FiEdit, FiEye, FiTrash2 } from 'react-icons/fi';

import { deleteAsas, getAsas } from '../../api/Api';

import { environment } from '../../shared/environment';

import { useToast } from '../../shared/context/ToastContext';

import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { ContentBaseLayout } from '../../shared/layouts/ContentBaseLayout';

import { ListToolbar, DeleteModal } from '../../shared/components';

import { Container, ActionsButton, ImageAsa } from './styles';

export const Asas = () => {
  const { addToast } = useToast();

  const [asas, setAsas] = useState([]);
  const [asaId, setAsaId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleSearch = useCallback(() => {
    console.log(handleSearch);
  }, []);

  const handleDetails = useCallback(
    (id, option) => {
      navigate(`/asas/details/${id}`, { state: { option } });
    },
    [navigate]
  );

  const getAllAsas = useCallback(async () => {
    const result = await getAsas();

    const formatedResult = result.map(item => {
      return {
        ...item,
        travel: item.travel ? 'Sim' : 'Não',
      };
    });

    setAsas(formatedResult);
    setRefresh(false);
  }, []);

  const handleDeleteAsa = useCallback(async () => {
    await deleteAsas(asaId);

    setRefresh(true);
    setAsaId(null);
    setOpenDeleteModal(false);

    addToast({
      type: 'success',
      title: 'Exclusão realizada!',
      description: 'Cadastro de moto excluído com sucesso.',
    });
  }, [asaId, addToast]);

  const handleCancelDelete = useCallback(() => {
    setOpenDeleteModal(false);
  }, []);

  const handleOpenModal = useCallback(id => {
    setAsaId(id);
    setOpenDeleteModal(true);
  }, []);

  useEffect(() => {
    getAllAsas();
  }, [getAllAsas, refresh]);

  return (
    <ContentBaseLayout
      title="Cadastre sua moto"
      toolbar={
        <ListToolbar handleSearch={handleSearch} handleNew={handleDetails} />
      }
    >
      <Container>
        {openDeleteModal && (
          <DeleteModal
            title="Exclusão de cadastro"
            description="Seu cadastro de moto será excluído permanentemente, deseja continuar?"
            handleDelete={handleDeleteAsa}
            handleCancel={handleCancelDelete}
          />
        )}
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: '100%',
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#F33C2A', fontWeight: 'bold' }}>
                  Ações
                </TableCell>
                <TableCell
                  align="left"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  --
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  Modelo
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  Cor
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  Ano de fabricação
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: '#F33C2A', fontWeight: 'bold' }}
                >
                  Já viajou com ela?
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {asas.map(asa => (
                <TableRow key={asa.id}>
                  <TableCell align="left">
                    <ActionsButton>
                      <button
                        type="button"
                        onClick={() => handleDetails(asa.id, 2)}
                      >
                        <FiEdit />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDetails(asa.id, 4)}
                      >
                        <FiEye />
                      </button>

                      <button onClick={() => handleOpenModal(asa.id)}>
                        <FiTrash2 />
                      </button>
                    </ActionsButton>
                  </TableCell>
                  <TableCell align="left">
                    <ImageAsa
                      src={
                        asa?.picture
                          ? `${environment.API_URL}/files/${asa?.picture}`
                          : `https://ui-avatars.com/api/?font-size=0.33&background=D3D3D3&color=333&name=${asa?.model}`
                      }
                    />
                  </TableCell>
                  <TableCell align="right">{asa.model}</TableCell>
                  <TableCell align="right">{asa.color}</TableCell>
                  <TableCell align="right">{asa.fabrication}</TableCell>
                  <TableCell align="right">{asa.travel}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </ContentBaseLayout>
  );
};

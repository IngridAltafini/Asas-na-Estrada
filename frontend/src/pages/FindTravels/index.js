import { useCallback, useState, useEffect } from 'react';

import { ListTravelsToolbar } from '../../shared/components';

import { ContentBaseLayout } from '../../shared/layouts/ContentBaseLayout';

import { getTravels } from '../../api/Api';

import { Container, ImageTravel } from './styles';

import { environment } from '../../shared/environment';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const FindTravels = () => {
  const [travels, setTravels] = useState([]);

  const handleAllTravels = useCallback(async () => {
    const result = await getTravels();

    const formatedResult = result.map(item => {
      return {
        ...item,
      };
    });

    setTravels(formatedResult);
  }, []);

  const handleSearch = useCallback(
    async data => {
      const { type, search } = data;

      let newList = [];

      switch (type) {
        case 'state': {
          newList = travels.filter(
            travel => travel.state.toLowerCase() === search.toLowerCase()
          );
          setTravels(newList);
          break;
        }

        case 'city': {
          newList = travels.filter(
            travel => travel.city.toLowerCase() === search.toLowerCase()
          );
          setTravels(newList);
          break;
        }

        case 'type': {
          newList = travels.filter(
            travel => travel.type.toLowerCase() === search.toLowerCase()
          );
          setTravels(newList);
          break;
        }

        case 'xx': {
          await handleAllTravels();
          break;
        }

        default:
      }
    },
    [travels, handleAllTravels]
  );

  useEffect(() => {
    handleAllTravels();
  }, [handleAllTravels]);

  return (
    <ContentBaseLayout
      title="Busca de pontos turísticos"
      toolbar={<ListTravelsToolbar handleSearch={handleSearch} />}
    >
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
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
                <TableRow key={Math.random()}>
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

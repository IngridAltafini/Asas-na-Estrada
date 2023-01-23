import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { useDrawerContext } from '../../context/DrawerContext';
import { Container, Menu, MenuItem, Logout } from './styles';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

import { ImHome } from 'react-icons/im';
import { BiWorld } from 'react-icons/bi';
import { MdOutlineLogout } from 'react-icons/md';
import { FaMotorcycle } from 'react-icons/fa';

export const MainHeader = () => {
  const navigate = useNavigate();
  const { toggleDrawerOpen } = useDrawerContext();

  const { signOut } = useAuth();

  return (
    <Container>
      <Box display="flex" justifyContent="space-evenly">
        <Menu>
          <MenuItem>
            <button type="button" onClick={() => navigate('/home')}>
              <ImHome />
              <h1>Página Inicial</h1>
            </button>
          </MenuItem>
        </Menu>
        <Menu>
          <MenuItem>
            <button type="button" onClick={() => navigate('/asas')}>
              <FaMotorcycle />
              <h1>Cadastre sua moto</h1>
            </button>
          </MenuItem>
        </Menu>

        <Menu>
          <MenuItem>
            <button type="button" onClick={() => navigate('/travels')}>
              <BiWorld />
              <h1 className="P">Cadastro de pontos turísticos</h1>
            </button>
          </MenuItem>
        </Menu>

        <Menu>
          <MenuItem>
            <button type="button" onClick={() => navigate('/find-travels')}>
              <BiWorld />
              <h1 className="P">Pontos Turísticos</h1>
            </button>
          </MenuItem>
        </Menu>
        <Box marginTop={1.6} marginLeft={18}>
          <IconButton onClick={toggleDrawerOpen}>
            <MenuIcon style={{ color: '#F33C2A' }} fontSize="large" />
          </IconButton>
        </Box>
        <Logout>
          <button type="button" onClick={signOut}>
            <MdOutlineLogout />
          </button>
        </Logout>
      </Box>
    </Container>
  );
};

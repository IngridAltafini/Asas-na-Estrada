import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';

import { Box } from '@mui/system';

import { useDrawerContext } from '../../context/DrawerContext';

import { Container, ProfileInfo } from './styles';

import { environment } from '../../environment';
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

const ListItemLink = ({ to, icon, label, onClick }) => {
  const navigate = useNavigate();

  const resolvePath = useResolvedPath(to);
  const match = useMatch({
    path: resolvePath.pathname,
    end: false,
  });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton
      selected={!!match}
      style={{ marginTop: 20 }}
      onClick={handleClick}
    >
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const Aside = ({ children }) => {
  const theme = useTheme();

  const [user, setUser] = useState();

  const getUserDetails = useCallback(async () => {
    const usersData = JSON.parse(
      localStorage.getItem(environment.APP_NAME)
    ).user;

    setUser(usersData);
  }, []);

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  return (
    <>
      <Container>
        <Drawer
          open={isDrawerOpen}
          variant={'temporary'}
          anchor="right"
          onClose={toggleDrawerOpen}
        >
          <Box
            width={theme.spacing(32)}
            height="100%"
            display="flex"
            flexDirection="column"
          >
            <Box
              width="100%"
              height={theme.spacing(30)}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Avatar
                sx={{
                  height: theme.spacing(16),
                  width: theme.spacing(16),
                }}
                src={
                  user?.avatar
                    ? `${environment.API_URL}/files/${user?.avatar}`
                    : `https://ui-avatars.com/api/?font-size=0.33&background=D3D3D3&color=333&name=${user?.name}`
                }
              />

              <ProfileInfo>
                <h1>{user?.name || 'Nome'}</h1>

                <span>{user?.email || 'Email'}</span>
              </ProfileInfo>
            </Box>

            <Divider
              sx={{
                bgcolor: '#F33C2A',
                width: '90%',
                opacity: 0.2,
                margin: '0 auto',
              }}
            />

            <Box flex={1}>
              <List component="nav">
                <ListItemLink
              
                  icon={<AccountCircleIcon />}
                  label="Meu Perfil"
                  to="/profiles"
                  onClick={toggleDrawerOpen}
                />
              </List>
            </Box>
          </Box>
        </Drawer>

        <Box height="100vh">{children}</Box>
      </Container>
    </>
  );
};

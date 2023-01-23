import { useTheme } from 'styled-components';

import { MdAdd } from 'react-icons/md';

import { Button } from '../';

import { Container } from './styles';

export const ListToolbar = ({ handleNew }) => {
  const theme = useTheme();

  const buttonStyles = {
    color: theme.text2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
  };

  return (
    <Container>
      <Button
        type="button"
        style={buttonStyles}
        onClick={() => handleNew('new', 1)}
      >
        <MdAdd size={24} style={{ marginRight: '16px' }} />
        Novo
      </Button>
    </Container>
  );
};

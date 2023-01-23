import { useTheme } from 'styled-components';

import { Button } from '../form/button/Button';

import {
  Container,
  Content,
  Header,
  Description,
  ActionContainer,
} from './styles';

export const DeleteModal = ({
  title,
  description,
  handleDelete,
  handleCancel,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <Content>
        <Header>
          <h1>{title}</h1>
        </Header>

        <Description>
          <span>{description}</span>
        </Description>

        <ActionContainer>
          <Button
            onClick={handleDelete}
            style={{
              color: theme.text,
              background: theme.error_background,
              border: `2px solid ${theme.error_title}`,
            }}
          >
            Excluir
          </Button>

          <Button
            onClick={handleCancel}
            style={{
              background: theme.content,
              border: `2px solid ${theme.content}`,
              color: theme.text,
            }}
          >
            Cancelar
          </Button>
        </ActionContainer>
      </Content>
    </Container>
  );
};

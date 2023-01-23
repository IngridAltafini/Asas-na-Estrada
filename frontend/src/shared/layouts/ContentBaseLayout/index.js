import { Container, Title, Content, Toolbar } from './styles';

export const ContentBaseLayout = ({ title, toolbar, children }) => {
  return (
    <Container>
      <Title>{title}</Title>

      {toolbar && <Toolbar>{toolbar}</Toolbar>}

      <Content>{children}</Content>
    </Container>
  );
};

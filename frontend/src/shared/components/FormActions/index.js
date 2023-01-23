import { Button } from '../';

import { Container } from './styles';

export const FormActions = ({ handleBack }) => {
  return (
    <Container>
      <Button
        style={{
          width: '150px',
        }}
        onClick={handleBack}
      >
        Voltar
      </Button>
    </Container>
  );
};

import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.primary};

  height: calc(100vh - 250px);

  border-radius: 10px;

  margin: 80px;

  padding: 16px;

  box-shadow: 0 0 10px ${({ theme }) => theme.primary};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  color: ${({ theme }) => theme.primary_dark};
`;

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  form {
    min-width: 650px;

    span {
      color: ${({ theme }) => theme.primary_light};
    }
  }

  svg {
    margin-left: 10px;
  }
`;

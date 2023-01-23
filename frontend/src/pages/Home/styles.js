import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 20px;
    color: ${({ theme }) => theme.primary_dark};
  }
`;

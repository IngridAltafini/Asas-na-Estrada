import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary_dark};
  margin-top: 16px;
  margin-left: 16px;
  font-size: 30px;
`;

export const Content = styled.div`
  margin: 16px;
  overflow: auto;
`;

export const Toolbar = styled.div`
  margin: 16px;
  border-radius: 8px;
  padding: 8px;
  background: ${({ theme }) => theme.content};
`;

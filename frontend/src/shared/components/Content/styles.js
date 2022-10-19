import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;

  background: ${({ theme }) => theme.content};
  color: ${({ theme }) => theme.text};
`;

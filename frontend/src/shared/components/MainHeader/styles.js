import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;

  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

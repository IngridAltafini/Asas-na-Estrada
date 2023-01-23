import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;

  background: ${({ theme }) => theme.text2};
  color: ${({ theme }) => theme.text};
`;

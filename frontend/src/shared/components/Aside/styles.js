import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  position: relative;

  background: ${({ theme }) => theme.background};
`;

export const ProfileInfo = styled.div`
  text-align: center;
  margin-top: 16px;

  h1 {
    font-size: 26px;
    color: ${({ theme }) => theme.primary};
  }

  span {
    font-weight: 500;
    font-size: 16px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;

  background: ${({ theme }) => theme.text2};
  border-bottom: 1px solid ${({ theme }) => theme.primary};
`;

export const Menu = styled.div`
  margin-top: 20px;
`;

export const MenuItem = styled.div`
  > button {
    background: ${({ theme }) => theme.text2};

    svg {
      color: ${({ theme }) => theme.primary};

      font-size: 18px;
    }

    transition: all 0.3s;

    &:hover {
      transform: scale(1.05);
    }

    h1 {
      color: ${({ theme }) => theme.primary_light};

      font-size: 18px;
    }
  }
`;

export const Logout = styled.div`
  button {
    background: ${({ theme }) => theme.text2};
  }

  svg {
    margin-top: 24px;
    color: ${({ theme }) => theme.primary};
    font-size: 30px;
  }

  transition: all 0.4s;

  &:hover {
    transform: scale(1.08);
  }
`;

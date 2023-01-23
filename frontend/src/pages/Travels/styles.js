import styled from 'styled-components';

export const Container = styled.div``;

export const ActionsButton = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 10px;
    background: transparent;
    border: 0;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
    }

    svg {
      font-size: 18px;
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const ImageTravel = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

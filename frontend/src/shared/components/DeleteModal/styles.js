import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.text2};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  box-shadow: 0 0 0 50vmax rgba(0, 0, 0, 0.5);
  width: 750px;
  padding: 16px;
`;

export const Header = styled.header`
  text-align: center;
  h1 {
    color: ${({ theme }) => theme.primary_dark};
    font-size: 26px;
  }
`;

export const Description = styled.section`
  margin: 16px 0;
  text-align: center;

  span {
    font-size: 20px;
  }
`;

export const ActionContainer = styled.section`
  margin-top: 24px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > button {
    width: 180px;
  }
`;

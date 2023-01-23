import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
  }
`;

export const Content = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  position: absolute;
  align-items: center;

  width: 100%;
  max-width: 50%;

  margin-left: 25%;
  background-color: ${({ theme }) => theme.background_light};

  border: 7px solid;
  border-color: ${({ theme }) => theme.secondary};

  > img {
    max-width: 300px;
  }

  h1 {
    color: ${({ theme }) => theme.text};
    font-size: 36px;
  }

  h2 {
    color: ${({ theme }) => theme.primary};
    font-size: 36px;
  }

  h3 {
    color: ${({ theme }) => theme.text};
    margin-top: 16px;
    font-size: 24px;
  }

  h4 {
    color: ${({ theme }) => theme.text};
    font-size: 26px;
    margin-bottom: 14px;
  }

  strong {
    color: ${({ theme }) => theme.primary};
    font-size: 36px;
  }

  .btn1 {
    margin-top: 16px;
    font-size: 18px;
    width: 30%;
    margin-bottom: 26px;
    margin-left: 0px;
  }

  .btn2 {
    font-size: 18px;
    width: 30%;
    margin-bottom: 26px;
    margin-left: 0px;
  }
`;

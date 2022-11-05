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
    max-width: 330px;
    margin-top: -50px;
    margin-bottom: -80px;
  }

  h1 {
    color: ${({ theme }) => theme.text};
    font-size: 40px;
  }

  h2 {
    color: ${({ theme }) => theme.primary};
    margin-top: -10px;
    font-size: 40px;
  }

  h3 {
    color: ${({ theme }) => theme.text};
    margin-top: 20px;
    font-size: 25px;
  }

  h4 {
    color: ${({ theme }) => theme.text};
    font-size: 25px;
    margin-bottom: 20px;
  }

  strong {
    color: ${({ theme }) => theme.primary};
    font-size: 35px;
    margin-bottom: 20px;
  }

  button {
    width: 30%;
    font-size: 20px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.background_light};

    padding: 10px;
    margin-bottom: 20px;
    border-radius: 30px;

    transition: transform 100ms linear;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

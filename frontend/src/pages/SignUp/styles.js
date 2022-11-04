import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  position: relative;
  flex: 1;
  background: no-repeat;
  background-size: cover;

  > h1 {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 37px;
    color: ${({ theme }) => theme.text};

    margin-top: 30px;
    margin-left: 290px;
  }

  > p {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 37px;
    color: ${({ theme }) => theme.text};

    margin-left: 278px;
    font-weight: 700;
  }

  > h2 {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 50px;
    color: ${({ theme }) => theme.primary};

    margin-left: 225px;
  }

  img {
    width: 650px;

    margin-left: 110px;

    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 18px;
  margin-left: 60%;

  width: 100%;
  max-width: max-content;
`;

export const BorderForm = styled.div`
  padding: 20px 50px;

  background-color: ${({ theme }) => theme.background_light};

  border-radius: 40px;
  border: 7px solid;
  border-color: ${({ theme }) => theme.secundary};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 25px;
    color: ${({ theme }) => theme.text};
  }

  input {
    font-size: 16px;
    padding: 0.5em 0;
    margin-bottom: 25px;
    background-color: ${({ theme }) => theme.background_light};
    border-bottom: 1px solid ${({ theme }) => theme.secundary_light};
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.secundary};
    }
  }

  button {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.secundary};
    color: ${({ theme }) => theme.background_light};

    padding: 10px 25px;
    margin-top: 25px;
    margin-left: 85px;
    margin-bottom: 10px;
    border-radius: 30px;

    transition: transform 100ms linear;

    &:hover {
      transform: scale(1.05);
    }
  }

  > strong {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;

    color: ${({ theme }) => theme.text};

    a {
      display: block;
      text-align: center;
      color: ${({ theme }) => theme.primary};
      text-decoration: none;

      transition: transform 100ms linear;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export const Box = styled.div`
  display: flex;
  margin-left: 25px;
`;

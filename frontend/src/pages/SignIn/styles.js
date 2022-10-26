import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
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
    margin-left: 308px;
  }

  > p {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 37px;
    color: ${({ theme }) => theme.text};

    margin-left: 295px;
    font-weight: 700;
  }

  > h2 {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 50px;
    color: ${({ theme }) => theme.primary};

    margin-left: 245px;
  }

  > img {
    width: 750px;

    margin-left: 50px;

    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 750px;
`;

export const BorderForm = styled.div`
  margin-top: 60px;

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
  > h4 {
    margin-top: 10px;
    display: flex;
    align-items: baseline;
    text-align: center;

    color: ${({ theme }) => theme.text};

    > a {
      display: block;
      margin-left: 95px;
      text-align: center;
      color: ${({ theme }) => theme.primary};
      text-decoration: none;

      transition: transform 100ms linear;

      &:hover {
        transform: scale(1.05);
      }
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

  > p {
    text-align: center;
    color: ${({ theme }) => theme.primary};
    font-size: 24px;
    font-weight: 500;
  }

  .btn2 {
    width: 100%;
    padding: 10px 28px;
    margin-left: 0px;
    margin-top: 10px;
    color: ${({ theme }) => theme.background_light};
    background-color: ${({ theme }) => theme.facebook};

    transition: transform 100ms linear;

    &:hover {
      transform: scale(1.05);
    }
    svg {
      display: flex;
      align-items: center;
      margin-right: 8px;
    }
  }

  .btn3 {
    width: 100%;
    padding: 10px 38px;
    border: 2px solid ${({ theme }) => theme.background};
    margin-left: 0px;
    margin-top: 2px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background_light};

    transition: transform 100ms linear;

    &:hover {
      transform: scale(1.05);
    }

    svg {
      display: flex;
      align-items: center;
      margin-right: 8px;
    }
  }

  > strong {
    margin-top: 10px;
    display: flex;
    align-items: baseline;
    text-align: center;

    color: ${({ theme }) => theme.text};

    a {
      display: block;
      margin-left: 20px;
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

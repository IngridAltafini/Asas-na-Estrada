import styled from 'styled-components';

export const Container = styled.div`
  height: 130vh;

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

    font-size: 40px;
    color: ${({ theme }) => theme.text};

    margin-top: 80px;
    margin-left: 260px;
  }

  > p {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 40px;
    color: ${({ theme }) => theme.text};

    margin-left: 248px;
    font-weight: 700;
  }

  > h2 {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 50px;
    color: ${({ theme }) => theme.primary};

    margin-left: 205px;
  }

  img {
    width: 750px;
    margin-top: 50px;
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
  margin-bottom: 50px;
  margin-top: 50px;

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

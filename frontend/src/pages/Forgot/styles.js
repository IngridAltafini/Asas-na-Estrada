import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-left: 10%;

  width: 100%;
  max-width: max-content;
`;

export const BorderForm = styled.div`
  padding: 20px 50px;

  background-color: ${({ theme }) => theme.background_light};

  border-radius: 40px;
  border: 6px solid;
  border-color: ${({ theme }) => theme.secondary};

  form {
    display: flex;
    flex-direction: column;
    width: 350px;
    text-align: center;

    h1 {
      font-size: 30px;
      color: ${({ theme }) => theme.primary};
      margin-bottom: 10px;
    }

    h2 {
      font-size: 22px;

      color: ${({ theme }) => theme.text};
    }

    strong {
      font-size: 22px;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.text};
    }

    a {
      font-size: 18px;
      margin-top: 10px;
      font-weight: 500;
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

export const Background = styled.div`
  flex: 1;
  background: no-repeat;
  background-size: cover;
  margin-left: 70px;

  > h1 {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 38px;
    color: ${({ theme }) => theme.text};

    margin-top: 30px;
  }

  > p {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 38px;
    color: ${({ theme }) => theme.text};

    font-weight: 700;
  }

  > h2 {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 50px;
    color: ${({ theme }) => theme.primary};
  }

  > img {
    width: 600px;
  }
`;

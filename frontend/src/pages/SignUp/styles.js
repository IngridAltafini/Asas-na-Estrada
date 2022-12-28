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

  margin-top: 14%;
  width: 100%;

  > h1 {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 38px;
    color: ${({ theme }) => theme.text};

    margin-left: 240px;
  }

  > p {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 38px;
    color: ${({ theme }) => theme.text};

    margin-left: 228px;
    font-weight: 700;
  }

  > h2 {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 50px;
    color: ${({ theme }) => theme.primary};

    margin-left: 178px;
  }

  img {
    width: 650px;

    margin-left: 66px;

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
      margin-bottom: 36px;
      color: ${({ theme }) => theme.text};
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
          transform: scale(1.04);
        }
      }
    }
  }
`;

export const Box = styled.div`
  display: flex;
  margin-left: 25px;
`;

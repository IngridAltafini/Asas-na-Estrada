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

    font-size: 38px;
    color: ${({ theme }) => theme.text};

    margin-top: 30px;
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

  > img {
    width: 650px;

    margin-left: 90px;

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

  margin-top: 38px;
  margin-left: 61%;

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
      margin-bottom: 40px;
      color: ${({ theme }) => theme.text};
    }

    > h4 {
      font-size: 16px;
      margin-top: 10px;
      display: flex;
      align-items: baseline;
      text-align: center;

      color: ${({ theme }) => theme.text};

      > a {
        display: block;
        margin-left: 94px;
        text-align: center;
        color: ${({ theme }) => theme.primary};
        text-decoration: none;

        transition: transform 100ms linear;

        &:hover {
          transform: scale(1.04);
        }
      }
    }

    .btn2 {
      width: 100%;
      margin-left: 0px;
      margin-top: 10px;
      background-color: ${({ theme }) => theme.facebook};
    }

    .btn3 {
      width: 100%;
      border: 2px solid ${({ theme }) => theme.dark_gray};
      margin-left: 0px;
      margin-top: 2px;
      color: ${({ theme }) => theme.text};
      background-color: ${({ theme }) => theme.background_light};
    }

    p {
      font-size: 24px;
      text-align: center;
      color: ${({ theme }) => theme.primary};
      font-weight: 500;
    }

    > strong {
      font-size: 16px;
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
          transform: scale(1.04);
        }
      }
    }
  }
`;

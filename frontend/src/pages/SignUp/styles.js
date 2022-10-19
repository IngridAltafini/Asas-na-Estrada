import styled from 'styled-components';

export const Container = styled.div`
  height: 140vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
 padding-left: 70px;
 padding-right: 70px;

  position: static;

  align-items: center;

  background-color: ${({ theme }) => theme.background_light};

  border-radius: 40px;
  border: 7px solid;
  border-color: ${({ theme }) => theme.secundary};

  margin: 45px;
  max-width: 100%;

  form {

    display: flex;
    flex-direction: column;
    justify-content: center;
  
    text-align: center;

    h1 {
      margin-top: 20px;
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
     

      &::placeholder {
        color: ${({ theme }) => theme.secundary};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
    


      max-width: 100%;
      width: 50%;

      font-size: 17px;
      font-weight: 700;
      background-color: ${({ theme }) => theme.secundary};
      color: ${({ theme }) => theme.background_light};
      
      padding: 10px;
      margin-left: 25%;
      margin-top: 25px;
      margin-bottom: 10px;
      border-radius: 30px;

      transition: transform 100ms linear;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  h3 {
      color: ${({ theme }) => theme.primary};
      width: 100%;
      font-size: 24px;
      font-weight: 500;
    }
   

    .btn2 {
     
      width: 100%;
      margin-left: 0px;
      margin-top: 5px;
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
      border: 2px solid ${({ theme }) => theme.background};
      margin-left: 0px;
      margin-top: 5px;
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
  }

  > h4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.text};

    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.primary};

      transition: transform 100ms linear;

      &:hover {
        transform: scale(1.05);
      }
    }
  
`;

export const Background = styled.div`
  > h1 {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 37px;
    color: ${({ theme }) => theme.text};

    margin: 80px 30%;
    width: 350px;
  }

  > h2 {
    display: flex;
    flex-direction: center;
    text-align: center;

    font-size: 50px;
    color: ${({ theme }) => theme.primary};

    margin-top: -60px;
    margin-left: 25%;
  }

  > img {
    margin-top: 40px;
    margin-left: 85px;
    width: 90%;
    display: flex;
    align-items: center;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
`;

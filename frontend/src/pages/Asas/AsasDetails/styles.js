import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.content};
  height: calc(100vh - 270px);

  border-radius: 8px;

  padding: 16px;

  h1 {
    font-size: 30px;
    color: ${({ theme }) => theme.primary_dark};
  }
`;

export const FormContent = styled.div`
  margin-top: 16px;

  display: flex;
  align-items: initial;
  justify-content: space-between;

  form {
    margin-right: 16px;
    min-width: 650px;
  }

  svg {
    margin-left: 10px;
  }
`;

export const AsaContainer = styled.div`
  margin: 0 auto;

  align-self: center;
  position: relative;

  width: 250px;
  height: 250px;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.secondary};

  box-shadow: 0 0 10px ${({ theme }) => theme.secondary};

  img {
    width: 250px;

    height: 250px;
    border-radius: 50%;
  }

  label {
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;

    position: absolute;
    right: 48px;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.3s;

    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    input {
      display: none;
    }

    svg {
      margin: 8px 4px;
      font-size: 24px;
      color: ${({ theme }) => theme.text2};
    }
  }
`;

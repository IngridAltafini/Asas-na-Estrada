import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  form {
    display: flex;
    align-items: center;
    width: 100%;

    > button {
      width: 10%;
    }

    svg {
      margin-left: 10px;
      font-size: 20px;
    }
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;700&display=swap');
  }

  html, body, #root {
    background-color:#FAFAFA;
    height: 100vh;
    font-family: 'Baloo 2';
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  button {
   cursor: pointer;
}

ul {
  list-style: none;
}

`;

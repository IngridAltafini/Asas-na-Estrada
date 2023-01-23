import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  html, body, #root {
    background-color: #FAFAFA;
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

import styled from 'styled-components';

export const GridLayout = styled.div`
  display: grid;

  grid-template-columns: auto 300px;
  grid-template-rows: 60px auto;

  grid-template-areas:
    'MH AS'
    'CT AS';

  height: 100vh;
`;

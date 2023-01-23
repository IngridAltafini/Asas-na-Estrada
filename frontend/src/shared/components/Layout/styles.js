import styled from 'styled-components';

export const GridLayout = styled.div`
  display: grid;

  grid-template-columns: auto 0;
  grid-template-rows: 80px auto;

  grid-template-areas:
    'MH AS'
    'CT AS';

  height: 100vh;
`;

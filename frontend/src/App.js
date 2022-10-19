import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import colors from './shared/styles/themes/colors';

import { AppRoutes } from './shared/routes';

import GlobalStyles from './shared/styles/GlobalStyles';

export const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <BrowserRouter>
        <GlobalStyles />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

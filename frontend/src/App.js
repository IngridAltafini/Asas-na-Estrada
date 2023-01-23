import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import colors from './shared/styles/themes/colors';

import { AppProvider } from './shared/context/';

import { AppRoutes } from './shared/routes';

import GlobalStyles from './shared/styles/GlobalStyles';
import { Aside } from './shared/components';

export const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <AppProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Aside>
            <AppRoutes />
          </Aside>
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  );
};

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './global/styles/theme';
import { GlobalStyle } from './global/styles/global';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './global/store/index';
import { MyRoutes } from './global/routes';
import { Header } from './modules/weather/presentation/Header';

export default function App () {
  return (
    <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
     <Header />
     <MyRoutes />
    <GlobalStyle />

    </ThemeProvider>
    </PersistGate>
    </ReduxProvider>
  );
}

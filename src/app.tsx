import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './global/styles/theme';
import { GlobalStyle } from './global/styles/global';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './global/store/index';

export default function App () {
  const [counter, setCounter] = useState<number>(0);

  function incrementCounter () { setCounter(counter + 1); }
  function decrementCounter () { setCounter(counter - 1); }

  return (
    <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
        <h1> Hello World 2e3 </h1>
        <h3> {counter} </h3>
        <button onClick={() => incrementCounter()}> increment </button>
        <button onClick={() => decrementCounter()}> decrement </button>
    <GlobalStyle />

    </ThemeProvider>
    </PersistGate>
    </ReduxProvider>
  );
}

import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { SafeArea } from './src/components/SafeArea';
import { theme } from './src/styles/theme';

import Routes from './src/routes/index';
import reducers from './src/redux/index';

const store = createStore(reducers);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeArea>
            <Routes />
          </SafeArea>
          <StatusBar style="auto" />
        </ThemeProvider>
      </Provider>
    </>
  );
}

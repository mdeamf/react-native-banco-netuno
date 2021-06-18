import React from 'react';
import AppLoading from 'expo-app-loading';

import { setCustomText } from 'react-native-global-props';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { theme } from './src/styles/theme';

import Routes from './src/routes/index';
import reducers from './src/redux/index';

const store = createStore(reducers);

const setDefaultFont = () => {
  setCustomText({
    style: {
      fontFamily: theme.fonts.OSR,
    },
  });
};

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    setDefaultFont();
    return (
      <>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Routes />
            <StatusBar style="auto" />
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

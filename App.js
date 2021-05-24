import React from 'react';

import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { SafeArea } from './src/components/SafeArea';
import { theme } from './src/styles/theme';
import { SplashPage } from './src/pages/splash/SplashPage';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <SplashPage />
        </SafeArea>
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

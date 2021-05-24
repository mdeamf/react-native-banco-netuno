import React from 'react';

import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { SafeArea } from './src/components/SafeArea';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <Text>Banco Netuno</Text>
        </SafeArea>
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

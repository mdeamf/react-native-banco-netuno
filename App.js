import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Text } from 'react-native';
import { SafeArea } from './src/components/SafeArea';

export default function App() {
  return (
    <>
      <SafeArea>
        <Text>Banco Netuno</Text>
      </SafeArea>
      <StatusBar style="auto" />
    </>
  );
}

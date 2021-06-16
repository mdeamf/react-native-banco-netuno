import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { SafeArea } from './src/components/SafeArea';
import { theme } from './src/styles/theme';
import { SplashPage } from './src/pages/splash/SplashPage';
import LoginPage from './src/pages/login/LoginPage';
import reducers from './src/redux/index';

const Stack = createStackNavigator();
const store = createStore(reducers);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeArea>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Splash"
                headerMode="none"
                animationEnable="true"
              >
                <Stack.Screen name="Splash" component={SplashPage} />
                <Stack.Screen name="Login" component={LoginPage} />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeArea>
          <StatusBar style="auto" />
        </ThemeProvider>
      </Provider>
    </>
  );
}

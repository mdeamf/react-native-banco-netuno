import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashPage from '../pages/splash/SplashPage';
import LoginPage from '../pages/login/LoginPage';
import HomeRoutes from './HomeRoutes';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        animationEnable="true"
        headerMode="none"
      >
        <Stack.Screen name="Splash" component={SplashPage} />
        <Stack.Screen name="Login" component={LoginPage} />

        <Stack.Screen name="Home" component={HomeRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

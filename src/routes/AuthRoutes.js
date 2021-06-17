import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashPage from '../pages/splash/SplashPage';
import LoginPage from '../pages/login/LoginPage';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      animationEnable="true"
      headerMode="none"
    >
      <Stack.Screen name="Splash" component={SplashPage} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
};

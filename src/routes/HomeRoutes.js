import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { NavBar } from '../components/NavBar';
import HomePage from '../pages/home/HomePage';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      animationEnable="true"
      screenOptions={{
        header: (props) => <NavBar {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

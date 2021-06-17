import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavBar } from '../components/NavBar';
import HomePage from '../pages/home/HomePage';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      animationEnable="true"
      drawerPosition="right"
      screenOptions={{
        header: (props) => <NavBar {...props} />,
        headerShown: true,
      }}
    >
      <Drawer.Screen name="Home" component={HomePage} />
    </Drawer.Navigator>
  );
};

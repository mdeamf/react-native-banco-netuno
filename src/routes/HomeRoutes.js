import React from 'react';
import styled from 'styled-components/native';

import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import { NavBar } from '../components/NavBar';
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';

const Stack = createStackNavigator();

const StackCard = styled(View)`
  flex: 1;
  background-color: transparent;
`;

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      mode="modal"
      screenOptions={{
        animationEnabled: true,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
        cardOverlay: () => <StackCard />,
        header: (props) => <NavBar {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Sobre" component={AboutPage} />
    </Stack.Navigator>
  );
};

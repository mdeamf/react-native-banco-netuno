import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useSelector } from 'react-redux';

import HomeRoutes from './HomeRoutes';
import AuthRoutes from './AuthRoutes';

export default () => {
  const state = useSelector((currentState) => currentState.login);

  return (
    <NavigationContainer>
      {!state.isLoggedIn ? <AuthRoutes /> : <HomeRoutes />}
    </NavigationContainer>
  );
};

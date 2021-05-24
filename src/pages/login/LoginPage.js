import React from 'react';

import { Text } from 'react-native';
import { FadeIn } from '../../components/FadeIn';

export const LoginPage = ({ navigation }) => {
  return (
    <FadeIn duration={300}>
      <Text>Login Page</Text>
    </FadeIn>
  );
};

import React, { useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';

import { FadeIn } from '../../components/FadeIn';
import { Logo, LogoContainer } from './SplashPage.styles';

export const SplashPage = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })
      );
    }, 6000);
  }, [navigation]);

  return (
    <LogoContainer>
      <FadeIn duration={4000}>
        <Logo source={require('../../../assets/neptune.png')} />
      </FadeIn>
    </LogoContainer>
  );
};

import React, { useEffect } from 'react';

import { Logo } from '../../components/Logo';
import { FadeIn } from '../../components/FadeIn';
import { LogoContainer } from './SplashPage.styles';

export default ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }, 1000);
  }, [navigation]);

  return (
    <LogoContainer>
      <FadeIn duration={4000}>
        <Logo size={200} />
      </FadeIn>
    </LogoContainer>
  );
};

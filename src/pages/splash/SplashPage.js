import React from 'react';

import { FadeIn } from '../../components/FadeIn';
import { Logo, LogoContainer } from './SplashPage.styles';

export const SplashPage = () => {
  return (
    <LogoContainer>
      <FadeIn duration={5000}>
        <Logo source={require('../../../assets/neptune.png')} />
      </FadeIn>
    </LogoContainer>
  );
};

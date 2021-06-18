import React from 'react';

import { Logo } from '../../components/Logo';

import { About, Name, Description, Developer } from './AboutPage.styles';

export default () => {
  return (
    <About>
      <Logo size={200} />
      <Name>Banco Netuno</Name>
      <Description>
        Este é um aplicativo para estudo de ReactJS e React Native, com
        propósitos de criação de portfólio, aprendizado e conhecimento.
      </Description>
      <Developer>Feito por Maurício Meira (@mdeamf)</Developer>
    </About>
  );
};

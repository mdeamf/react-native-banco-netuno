import React from 'react';

import { useSelector } from 'react-redux';
import { HomeContainer, Welcome, Username } from './HomePage.styles';
import { BalanceCard } from './components/BalanceCard';
import { CreditCardCard } from './components/CreditCardCard';

export default () => {
  const login = useSelector((currentState) => currentState.login);

  return (
    <HomeContainer>
      <Welcome>
        Bem-vindo, <Username>{login.username}</Username>!
      </Welcome>

      <BalanceCard />
      <CreditCardCard />
    </HomeContainer>
  );
};

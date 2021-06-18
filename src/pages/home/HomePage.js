import React from 'react';

import { useSelector } from 'react-redux';
import { HomeContainer, Welcome, Username } from './HomePage.styles';
import { BalanceCard } from './components/Cards/BalanceCard';
import { CreditCardCard } from './components/Cards/CreditCardCard';
import { ServiceList } from './components/ServiceList/ServiceList';

export default () => {
  const login = useSelector((currentState) => currentState.login);

  const services = [
    {
      icon: 'description',
      title: 'Faturas',
    },
    {
      icon: 'credit-card',
      title: 'Cartões',
    },
    {
      icon: 'attach-money',
      title: 'Extrato',
    },
    {
      icon: 'redeem',
      title: 'Rewards',
    },
  ];

  return (
    <HomeContainer>
      <Welcome>
        Bem-vindo, <Username>{login.username}</Username>!
      </Welcome>

      <BalanceCard />
      <CreditCardCard />

      <ServiceList services={services} />
    </HomeContainer>
  );
};

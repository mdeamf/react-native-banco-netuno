import React from 'react';

import { useSelector } from 'react-redux';
import { HomeContainer, Welcome, Username } from './HomePage.styles';
import { BalanceCard } from './components/Cards/BalanceCard';
import { CreditCardCard } from './components/Cards/CreditCardCard';
import { ServiceList } from './components/ServiceList/ServiceList';
import { serviceList } from '../../global/Constants';

export default () => {
  const login = useSelector((currentState) => currentState.login);

  const services = serviceList;

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

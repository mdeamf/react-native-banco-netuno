import React from 'react';
import styled from 'styled-components';

import { View } from 'react-native';

import { ServiceItem } from './ServiceItem';

const Container = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const List = ({ services }) => {
  return services.map((service, index) => (
    <ServiceItem key={index} icon={service.icon} title={service.title} />
  ));
};

export const ServiceList = ({ services = [] }) => {
  if (services.length % 2 !== 0 && services[services.length - 1].icon) {
    services.push({ title: 'Empty' });
  }

  return (
    <Container>
      <List services={services} />
    </Container>
  );
};

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
  return services.map((service) => (
    <ServiceItem icon={service.icon} title={service.title} />
  ));
};

export const ServiceList = ({ services = [] }) => {
  return (
    <Container>
      <List services={services} />
    </Container>
  );
};

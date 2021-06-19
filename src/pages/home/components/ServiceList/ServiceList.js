import React from 'react';
import styled from 'styled-components';

import { View } from 'react-native';

import { ServiceItem } from './ServiceItem';

const Container = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const List = ({ services, navigation }) => {
  return services.map((service, index) => (
    <ServiceItem
      key={index}
      icon={service.icon}
      title={service.title}
      route={service.route}
      navigation={navigation}
    />
  ));
};

export const ServiceList = (props) => {
  if (
    props.services.length % 2 !== 0 &&
    props.services[props.services.length - 1].icon
  ) {
    props.services.push({ title: 'Empty' });
  }

  return (
    <Container>
      <List {...props} />
    </Container>
  );
};

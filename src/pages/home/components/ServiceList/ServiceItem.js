import React from 'react';
import { Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import styled from 'styled-components';

const ContainerFake = styled(View)`
  flex-grow: 1;
  flex-basis: 25%;
  margin: ${(props) => props.theme.space.lg}px;
  padding: ${(props) => props.theme.space.lg}px;
`;

const Container = styled(TouchableRipple)`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.ui.tertiary};
  flex-grow: 1;
  flex-basis: 25%;
  margin: ${(props) => props.theme.space.lg}px;
  padding: ${(props) => props.theme.space.lg}px;
  border-radius: ${(props) => props.theme.space.sm}px;
`;

const ServiceIcon = styled(Icon).attrs((props) => ({
  color: props.theme.colors.ui.tertiary,
}))`
  margin-bottom: ${(props) => props.theme.space.md}px;
`;

const ServiceTitle = styled(Text)`
  color: ${(props) => props.theme.colors.ui.tertiary};
  font-family: ${(props) => props.theme.fonts.OSSB};
`;

export const ServiceItem = ({ icon, title }) => {
  return (
    <>
      {!icon ? (
        <ContainerFake />
      ) : (
        <Container onPress={() => console.log('hello')}>
          <>
            <ServiceIcon name={icon} />
            <ServiceTitle>{title}</ServiceTitle>
          </>
        </Container>
      )}
    </>
  );
};

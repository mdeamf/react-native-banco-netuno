import React from 'react';
import styled from 'styled-components/native';

import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const Container = styled(View)`
  height: 120px;
  padding: ${(props) => props.theme.sizes.md}px
    ${(props) => props.theme.sizes.lg}px;
  margin-bottom: ${(props) => props.theme.sizes.xl}px;
  background-color: ${(props) => props.theme.colors.brand.primary};
  align-items: center;
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.tertiary};
`;

const Value = styled(Text)`
  color: ${(props) => props.theme.colors.ui.tertiary};
  font-size: ${(props) => props.theme.fontSizes.h4}px;
  font-family: ${(props) => props.theme.fonts.OSSB};
`;

const IconCurrency = styled(Icon).attrs((props) => ({
  size: props.theme.sizes.lg,
  raised: true,
  name: 'attach-money',
  iconStyle: {
    fontSize: props.theme.fontSizes.h3,
    color: props.theme.colors.text.primary,
  },
}))``;

export const StatementTimelineHeader = () => {
  return (
    <Container>
      <Title>Saldo da Conta</Title>
      <Value>R$ 2.500,00</Value>
      <IconCurrency />
    </Container>
  );
};

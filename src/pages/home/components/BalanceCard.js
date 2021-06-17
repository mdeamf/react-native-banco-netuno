import React from 'react';
import styled from 'styled-components/native';

import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { Icon, Button } from 'react-native-elements';

const Content = styled(Card.Content)`
  padding: 16px;
`;

const Container = styled(View)`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title}px;
`;

const MoneyIcon = styled(Icon).attrs((props) => ({
  size: props.theme.fontSizes.title,
  color: props.theme.colors.text.success,
}))``;

const Value = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h4}px;
  color: ${(props) => props.theme.colors.text.success};
`;

const ExtractButton = styled(Button)`
  color: ${(props) => props.theme.colors.brand.primary};
`;

const ExtractIcon = styled(Icon).attrs((props) => ({
  color: props.theme.colors.brand.primary,
  name: 'arrow-right',
  type: 'material-community',
  size: props.theme.sizes.mlg,
}))``;

const BalanceButtons = () => {
  return (
    <Card.Actions>
      <ExtractButton
        title="Ver extrato"
        type="clear"
        iconRight="true"
        icon={<ExtractIcon />}
      />
    </Card.Actions>
  );
};

export const BalanceCard = () => {
  return (
    <Card>
      <Content>
        <Container>
          <Title>Saldo</Title>
          <MoneyIcon name="currency-usd" type="material-community" />
        </Container>
        <Value>R$ 2.500,00</Value>
      </Content>
      <BalanceButtons />
    </Card>
  );
};

import React from 'react';
import styled from 'styled-components/native';

import { Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import { Card, Content, Container, Title, TitleIcon } from './BaseCard';

const Value = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h4}px;
  color: ${(props) => props.theme.colors.text.success};
`;

const StatementButton = styled(Button)`
  color: ${(props) => props.theme.colors.brand.primary};
`;

const StatementIcon = styled(Icon).attrs((props) => ({
  color: props.theme.colors.brand.primary,
  name: 'arrow-right',
  type: 'material-community',
  size: props.theme.sizes.mlg,
}))``;

const BalanceButtons = ({ navigation }) => {
  return (
    <Card.Actions>
      <StatementButton
        title="Ver extrato "
        type="clear"
        iconRight="true"
        icon={<StatementIcon />}
        onPress={() => navigation.navigate('Statement')}
      />
    </Card.Actions>
  );
};

export const BalanceCard = (props) => {
  return (
    <Card>
      <Content>
        <Container>
          <TitleIcon name="currency-usd" type="material-community" />
          <Title>Saldo</Title>
        </Container>
        <Value>R$ 2.500,00</Value>
      </Content>
      <BalanceButtons navigation={props.navigation} />
    </Card>
  );
};

import React from 'react';
import styled from 'styled-components/native';

import { Text } from 'react-native';
import { Card } from 'react-native-paper';

import { Content, Container, Title, TitleIcon } from './BaseCard';

const Value = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h4}px;
  color: ${(props) => props.theme.colors.brand.primary};
`;

const Invoice = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body}px;
`;

const InvoiceCurrent = styled(Invoice)`
  margin-top: ${(props) => props.theme.sizes.sm}px;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const InvoiceLimit = styled(Invoice)`
  color: ${(props) => props.theme.colors.text.primary};
`;

export const CreditCardCard = () => {
  return (
    <Card>
      <Content>
        <Container>
          <TitleIcon name="credit-card-outline" type="material-community" />
          <Title>Cartão de Crédito</Title>
        </Container>
        <InvoiceCurrent>Fatura Atual</InvoiceCurrent>
        <Value>R$ 525,10</Value>
        <InvoiceLimit>Limite total: R$ 1.200,00</InvoiceLimit>
      </Content>
    </Card>
  );
};

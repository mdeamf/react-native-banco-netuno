import styled from 'styled-components/native';

import { Text, View } from 'react-native';
import { Card as CardPaper } from 'react-native-paper';
import { Icon } from 'react-native-elements';

export const Card = styled(CardPaper)`
  margin-bottom: ${(props) => props.theme.sizes.md}px;
`;

export const Content = styled(Card.Content)`
  padding: 16px 16px 0 16px;
`;

export const Container = styled(View)`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title}px;
`;

export const TitleIcon = styled(Icon).attrs((props) => ({
  size: props.theme.fontSizes.title,
  color: props.theme.colors.text.primary,
}))`
  margin-right: ${(props) => props.theme.sizes.sm}px;
`;

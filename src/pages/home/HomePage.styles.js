import styled from 'styled-components/native';

import { Text, View } from 'react-native';

export const HomeContainer = styled(View)`
  padding: ${(props) => props.theme.space.lg}px;
  flex: 1;
`;

export const Welcome = styled(Text)`
  margin-bottom: ${(props) => props.theme.space.xl}px;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 32px;
`;

export const Username = styled(Text)`
  color: ${(props) => props.theme.colors.brand.primary};
  text-transform: uppercase;
`;

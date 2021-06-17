import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const HomeContainer = styled(View)`
  flex: 1;
`;

export const Welcome = styled(Text)`
  padding: 16px;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 32px;
`;

export const Username = styled(Text)`
  color: ${(props) => props.theme.colors.brand.primary};
  text-transform: uppercase;
`;

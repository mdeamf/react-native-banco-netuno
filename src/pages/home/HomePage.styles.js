import styled from 'styled-components/native';

import { Text, ScrollView } from 'react-native';

export const HomeContainer = styled(ScrollView).attrs((props) => ({
  contentContainerStyle: {
    padding: props.theme.space.lg,
    flexGrow: 1,
  },
}))``;

export const Welcome = styled(Text)`
  margin-bottom: ${(props) => props.theme.space.xl}px;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h5}px;
  font-family: ${(props) => props.theme.fonts.OSSB};
`;

export const Username = styled(Text)`
  color: ${(props) => props.theme.colors.brand.primary};
  text-transform: uppercase;
`;

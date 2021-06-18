import styled, { css } from 'styled-components/native';

import { ScrollView, Text } from 'react-native';

const textMargin = css`
  margin-top: 16px;
`;

export const About = styled(ScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
  },
})``;

export const Name = styled(Text)`
  ${textMargin}
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 30px;
  font-family: OpenSans-SemiBold;
`;

export const Description = styled(Text)`
  ${textMargin}
  color: ${(props) => props.theme.colors.text.secondary};
  text-align: center;
`;

export const Developer = styled(Text)`
  ${textMargin}
  color: ${(props) => props.theme.colors.text.secondary};
  font-size: 16px;
  font-family: OpenSans-SemiBold;
`;

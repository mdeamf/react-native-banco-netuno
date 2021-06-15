import styled from 'styled-components/native';

import { ScrollView } from 'react-native';
import { Card, HelperText } from 'react-native-paper';

import { Logo } from '../../components/Logo';

export const Login = styled(ScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
})``;

export const LoginLogo = styled(Logo)`
  margin-bottom: 32px;
`;

export const LoginCard = styled(Card)`
  width: 100%;
  max-width: 500px;
`;

export const LoginInputs = styled(Card.Content)``;

export const LoginWarning = styled(HelperText)`
  margin-bottom: 8px;
`;

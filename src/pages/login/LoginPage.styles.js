import { View } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';
import { Logo } from '../../components/Logo';

export const Login = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 0.8;
  margin: 16px;
`;

export const LoginLogo = styled(Logo)`
  margin-bottom: 32px;
`;

export const LoginCard = styled(Card)`
  width: 100%;
  max-width: 500px;
`;

export const LoginInputs = styled(Card.Content)``;

export const LoginInput = styled(TextInput)`
  margin-bottom: 16px;
`;

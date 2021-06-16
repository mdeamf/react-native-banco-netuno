import React from 'react';
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextInput } from 'react-native-paper';

import { Loading } from '../../components/Loading';

import {
  Login,
  LoginLogo,
  LoginCard,
  LoginInputs,
  LoginWarning,
} from './LoginPage.styles';

const LoginPage = ({ setLoading }) => {
  const [hidePassword, setHidePassword] = React.useState(true);

  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
  };

  const onUsernameSubmit = () => {
    if (!isValid) {
      setFocus('senha');
    }
  };

  const checkUsernameError = () => {
    return errors?.usuario?.type === 'required';
  };

  const checkPasswordError = () => {
    return errors?.senha?.type === 'minLength';
  };

  return (
    <Login>
      <LoginLogo size={150} />
      <LoginCard elevation={5}>
        <LoginInputs>
          <Controller
            control={control}
            name="usuario"
            rules={{ required: true }}
            defaultValue=""
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <View>
                <TextInput
                  mode="outlined"
                  label="Usuário"
                  value={value}
                  error={checkUsernameError()}
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  onSubmitEditing={onUsernameSubmit}
                  ref={ref}
                />
                <LoginWarning type="error" visible={checkUsernameError()}>
                  O usuário é de preenchimento obrigatório!
                </LoginWarning>
              </View>
            )}
          />

          <Controller
            control={control}
            name="senha"
            rules={{ required: true, minLength: 6 }}
            defaultValue=""
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <View>
                <TextInput
                  mode="outlined"
                  label="Senha"
                  value={value}
                  error={checkPasswordError()}
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  ref={ref}
                  secureTextEntry={hidePassword}
                  right={
                    <TextInput.Icon
                      name={hidePassword ? 'eye' : 'eye-off'}
                      onPress={() => setHidePassword(!hidePassword)}
                    />
                  }
                />
                <LoginWarning type="error" visible={checkPasswordError()}>
                  A senha deve ter no mínimo 6 caracteres.
                </LoginWarning>
              </View>
            )}
          />
          <Button mode="contained" onPress={handleSubmit(onSubmit)}>
            Acessar conta
          </Button>
        </LoginInputs>
      </LoginCard>
    </Login>
  );
};

export default Loading(LoginPage);

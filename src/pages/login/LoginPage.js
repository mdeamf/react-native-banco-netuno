import React from 'react';
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { Loading } from '../../components/Loading';
import { DO_LOGIN } from '../../redux/actions/loginActions';

import {
  Login,
  LoginLogo,
  LoginCard,
  LoginInputs,
  LoginWarning,
} from './LoginPage.styles';

const LoginPage = ({ setLoading }) => {
  const [hidePassword, setHidePassword] = React.useState(true);
  const [doingLogin, setDoingLogin] = React.useState(false);

  const state = useSelector((currentState) => currentState);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setFocus,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = () => {
    setLoading(true);
    setDoingLogin(true);

    setTimeout(() => {
      dispatch({
        type: DO_LOGIN,
      });
    }, 3000);
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

  React.useEffect(() => {
    if (doingLogin && state.login.isLoggedIn) {
      setLoading(false);
    }
  });

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
                  disabled={doingLogin}
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
                  disabled={doingLogin}
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
          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            disabled={doingLogin}
          >
            Acessar conta
          </Button>
        </LoginInputs>
      </LoginCard>
    </Login>
  );
};

export default Loading(LoginPage);

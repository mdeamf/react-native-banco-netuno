import React, { useState } from 'react';

import {
  Login,
  LoginLogo,
  LoginCard,
  LoginInputs,
  LoginInput,
} from './LoginPage.styles';

export const LoginPage = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Login>
      <LoginLogo size={150} />
      <LoginCard elevation={5}>
        <LoginInputs>
          <LoginInput
            mode="outlined"
            label="Usuário"
            value={usuario}
            onChangeText={(text) => setUsuario(text)}
          />

          <LoginInput
            mode="outlined"
            label="Senha"
            value={senha}
            secureTextEntry={true}
            onChangeText={(text) => setSenha(text)}
          />
        </LoginInputs>
      </LoginCard>
    </Login>
  );
};

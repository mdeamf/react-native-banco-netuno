import React from 'react';

import { Appbar } from 'react-native-paper';

export const NavBar = ({ navigation, previous }) => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Banco Netuno" />
    </Appbar.Header>
  );
};

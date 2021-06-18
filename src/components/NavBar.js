import React from 'react';

import { useRoute } from '@react-navigation/native';

import { Appbar } from 'react-native-paper';

export const NavBar = (props) => {
  const route = useRoute();

  return (
    <Appbar.Header>
      {route.name !== 'Home' && (
        <Appbar.BackAction onPress={props.navigation.goBack} />
      )}
      <Appbar.Content title="Banco Netuno" />
      <Appbar.Action
        icon="menu"
        onPress={() => {
          props.navigation.navigate('Sobre');
        }}
      />
    </Appbar.Header>
  );
};

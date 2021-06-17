import React from 'react';

import { Appbar } from 'react-native-paper';

export const NavBar = ({ scene, previous }) => {
  return (
    <Appbar.Header>
      {previous && (
        <Appbar.BackAction onPress={scene.descriptor.navigation.goBack} />
      )}
      <Appbar.Content title="Banco Netuno" />
      {!previous && (
        <Appbar.Action
          icon="menu"
          onPress={() => {
            scene.descriptor.navigation.openDrawer();
          }}
        />
      )}
    </Appbar.Header>
  );
};

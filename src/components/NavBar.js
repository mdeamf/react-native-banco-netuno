import React from 'react';
import styled from 'styled-components';

import { useRoute } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { SideBar } from './SideBar';

const AppHeader = styled(Appbar.Header)`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const NavBar = (props) => {
  const route = useRoute();
  const [sideBarShowing, setSideBarShowing] = React.useState(false);

  return (
    <>
      <AppHeader>
        {route.name !== 'Home' && (
          <Appbar.BackAction onPress={props.navigation.goBack} />
        )}

        <Appbar.Content title="Banco Netuno" />

        {route.name === 'Home' && (
          <Appbar.Action
            icon="menu"
            onPress={() => {
              setSideBarShowing(!sideBarShowing);
            }}
          />
        )}
      </AppHeader>

      {sideBarShowing && (
        <SideBar
          showing={sideBarShowing}
          setShowing={setSideBarShowing}
          navigation={props.navigation}
        />
      )}
    </>
  );
};

import React from 'react';

import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { Icon, Button, Overlay } from 'react-native-elements';
import { withTheme } from 'styled-components/native';

import { FadeIn } from '../components/FadeIn';
import { serviceList } from '../global/Constants';

const sideBarStyle = StyleSheet.create({
  overlay: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '60%',
    height: '100%',
  },
  button: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  icon: {
    marginRight: 8,
  },
});

export const SideBar = withTheme(
  ({ showing, setShowing, navigation, theme }) => {
    const services = serviceList;

    return (
      <Overlay
        isVisible={showing}
        onBackdropPress={() => setShowing(false)}
        overlayStyle={sideBarStyle.overlay}
      >
        <FadeIn duration={1000}>
          <FlatList
            data={services}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <Button
                title={item.title}
                type="clear"
                buttonStyle={sideBarStyle.button}
                icon={
                  <Icon
                    name={item.icon}
                    style={sideBarStyle.icon}
                    color={theme.colors.brand.primary}
                  />
                }
                onPress={() => {
                  setShowing(false);
                  navigation.navigate(item.route);
                }}
              />
            )}
          />
        </FadeIn>
      </Overlay>
    );
  }
);

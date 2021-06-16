import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components/native';

import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export const Loading = (WrappedComponent) => {
  const LoadingContainer = styled(View)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background-color: ${(props) => props.theme.colors.bg.overlay};
  `;

  const HOC = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <>
        {isLoading && (
          <LoadingContainer>
            <ActivityIndicator
              animating={true}
              color={props.theme.colors.brand.primary}
              size={75}
            />
          </LoadingContainer>
        )}
        <WrappedComponent {...props} setLoading={setIsLoading} />
      </>
    );
  };

  return withTheme(HOC);
};

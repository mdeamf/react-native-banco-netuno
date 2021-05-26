import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const LogoImage = styled(Image)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export const Logo = (props) => {
  return (
    <>
      <LogoImage source={require('../../assets/neptune.png')} {...props} />
    </>
  );
};

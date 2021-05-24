import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export const FadeIn = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: props.duration,
    }).start();
  }, [fadeAnim, props.duration]);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
};

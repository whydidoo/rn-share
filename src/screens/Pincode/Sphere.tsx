import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { View } from 'react-native';

const AnimatedView = Animated.createAnimatedComponent(View);

export const Sphere: React.FC<{ code: string }> = ({ code }) => {
  const shareValue = useSharedValue(0);

  useEffect(() => {
    const toValue = code ? 1 : 0;

    shareValue.value = toValue
      ? withSpring(toValue, {
          damping: 5,
          mass: 1,
          stiffness: 500,
          overshootClamping: false,
          restDisplacementThreshold: 0.1,
          restSpeedThreshold: 2,
        })
      : withTiming(toValue, {
          duration: 150,
        });
  }, [code, shareValue]);

  const styleAnim = useAnimatedStyle(() => {
    return {
      height: interpolate(shareValue.value, [0, 1], [2, 20]),
      top: interpolate(shareValue.value, [0, 1], [0, -5]),
      width: 20,
      borderRadius: 20,
      backgroundColor: '#06C149',
    };
  });

  return <AnimatedView style={styleAnim} />;
};

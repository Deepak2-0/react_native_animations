import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Circle, Svg} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const AnimatingStyleAndProps = () => {
  const translateX = useSharedValue(100);
  const rad = useSharedValue(20);

  const handlePress = () => {
    translateX.value = translateX.value + 50;
  };

  const handleCircleButtonPress = () => {
    rad.value = rad.value + 10;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(translateX.value * 2, {
          duration: 2000,
          dampingRatio: 0.5,
          stiffness: 100,
        }),
      },
    ],
  }));

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(rad.value, {
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    }),
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button title="Click" onPress={handlePress} />
      <Svg style={styles.svg}>
        <AnimatedCircle
          cx="50%"
          cy="50%"
          fill="#b58df1"
          animatedProps={animatedProps}
        />
      </Svg>
      <Button title="Circle Click" onPress={handleCircleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.flatten({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'violet',
    marginLeft: -700,
  },
  svg: {
    height: 250,
    width: '100%',
  },
});

export default AnimatingStyleAndProps;

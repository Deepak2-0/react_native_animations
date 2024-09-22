import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const SIZE = 120;
const BOUNDARY_OFFSET = 50;

const HandlingGestures = () => {
  const pressed = useSharedValue<boolean>(false);
  const panPressed = useSharedValue<boolean>(false);

  const offset = useSharedValue<number>(0);
  const width = useSharedValue<number>(0);

  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const pan = Gesture.Pan()
    .onBegin(() => {
      panPressed.value = true;
    })
    .onChange(event => {
      //   offset.value = event.translationX;
      offset.value += event.changeX;
    })
    .onFinalize(event => {
      //   offset.value = withSpring(0);
      //   panPressed.value = false;
      offset.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [
          -(width.value / 2) + SIZE / 2 + BOUNDARY_OFFSET,
          width.value / 2 - SIZE / 2 - BOUNDARY_OFFSET,
        ],
      });
    });

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? '#FFE04B' : '#B58DF1',
    transform: [{scale: withTiming(pressed.value ? 1.2 : 1)}],
  }));

  const animatedPanStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: offset.value},
      {scale: withTiming(panPressed.value ? 1.2 : 1)},
    ],
    backgroundColor: panPressed.value ? '#FFE04B' : '#b58df1',
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={tap}>
        <Animated.View style={[styles.circle, animatedStyles]}>
          <Text>Tap Gesture</Text>
        </Animated.View>
      </GestureDetector>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.circle, animatedPanStyles]}>
          <Text>Pan Gesture</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};
export default HandlingGestures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  circle: {
    height: 120,
    width: 120,
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

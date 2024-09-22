import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const OFFSET = 60;
const TIME = 250;
const DELAY = 400;

const ApplyingModifiers = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const handlePress = () => {
    // offset.value = withRepeat(withTiming(OFFSET), 5, true);
    // offset.value = withSequence(withTiming(OFFSET), withTiming(0));

    // offset.value = withSequence(
    //   // start from -OFFSET
    //   withTiming(-OFFSET, {duration: TIME / 2}),
    //   // shake between -OFFSET and OFFSET 5 times
    //   withRepeat(withTiming(OFFSET, {duration: TIME}), 5, true),
    //   // go back to 0 at the end
    //   withTiming(0, {duration: TIME / 2}),
    // );

    offset.value = withDelay(
      DELAY,
      withSequence(
        // start from -OFFSET
        withTiming(-OFFSET, {duration: TIME / 2}),
        // shake between -OFFSET and OFFSET 5 times
        withRepeat(withTiming(OFFSET, {duration: TIME}), 5, true),
        // go back to 0 at the end
        withTiming(0, {duration: TIME / 2}),
      ),
    );
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button title="Click" onPress={handlePress} />
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
  },
  svg: {
    height: 250,
    width: '100%',
  },
});

export default ApplyingModifiers;

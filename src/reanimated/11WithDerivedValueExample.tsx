import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  useDerivedValue,
} from 'react-native-reanimated';

const WithDerivedValueExample = () => {
  const scale = useSharedValue<number>(1);

  // highlight-start
  const rotate = useDerivedValue(() => {
    return `${scale.value * 2}rad`;
  });
  // highlight-end

  const scaleStyles = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  const rotateStyles = useAnimatedStyle(() => ({
    transform: [{rotate: rotate.value}],
  }));

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(scale.value * 2, {duration: 1000}),
      -1,
      true,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, scaleStyles]} />
      <Animated.View style={[styles.box, rotateStyles]} />
    </View>
  );
};

export default WithDerivedValueExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'row',
  },
  ball: {
    height: 50,
    width: 50,
    backgroundColor: '#b58df1',
    borderRadius: 50,
    marginRight: 80,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#b58df1',
    borderRadius: 15,
  },
});
import React, {useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  cancelAnimation,
} from 'react-native-reanimated';
import {SCREEN_WIDTH} from '../utils/dimensions';

const CancelAnimationExample = () => {
  const offset = useSharedValue<number>(SCREEN_WIDTH / 2 - 160);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const startAnimation = () => {
    offset.value = withRepeat(
      withTiming(
        offset.value > 0 ? -SCREEN_WIDTH / 2 + 160 : SCREEN_WIDTH / 2 - 160,
        {
          duration: 1500,
        },
      ),
      -1,
      true,
    );
  };

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancelAnimation = () => {
    // highlight-next-line
    cancelAnimation(offset);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={styles.row}>
        <Button title="Cancel animation" onPress={handleCancelAnimation} />
        <Button title="Start animation" onPress={startAnimation} />
      </View>
    </View>
  );
};

export default CancelAnimationExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
});

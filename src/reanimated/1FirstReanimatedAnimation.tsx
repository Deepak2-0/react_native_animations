import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

const FirstReanimatedAnimation = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            width: width,
          },
        ]}
      />
      <Button title="Click" onPress={handlePress} />
    </View>
  );
};

export default FirstReanimatedAnimation;

const styles = StyleSheet.flatten({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 100,
    backgroundColor: 'violet',
  },
});

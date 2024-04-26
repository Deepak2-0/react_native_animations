import {MotiView} from 'moti';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Easing} from 'react-native-reanimated';

const PhoneRingIndicatorWave = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.center, styles.dot]}>
        {[...Array(3).keys()].map(index => {
          return (
            <MotiView
              key={index.toString()}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
              from={{opacity: 0.7, scale: 1}}
              animate={{opacity: 0, scale: 4}}
              transition={{
                duration: 2000,
                type: 'timing',
                easing: Easing.out(Easing.ease),
                loop: true,
                delay: index * 400,
                repeatReverse: false,
              }}
            />
          );
        })}
        <Text style={styles.text}>Call</Text>
      </View>
    </View>
  );
};

export default PhoneRingIndicatorWave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: 'purple',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
});

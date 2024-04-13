/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {SCREEN_NAMES} from '../utils/constants';
import HorizontalRule from '../commonComponent/HorizontalRule';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <HorizontalRule />
      <Button
        title={`Go To 2. ${SCREEN_NAMES.DynamicSizeItemScroll} Screen`}
        onPress={() => navigation.navigate(SCREEN_NAMES.DynamicSizeItemScroll)}
      />
      <HorizontalRule />
      <Button
        title={`Go To 3. ${SCREEN_NAMES.DynamicSizeItemScrollUsingMoti} Screen`}
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.DynamicSizeItemScrollUsingMoti)
        }
      />
      <Text>Using Moti For some extra touch of animation</Text>
      <HorizontalRule />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

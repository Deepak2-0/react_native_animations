import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {SCREEN_NAMES} from '../utils/constants';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text>Default Screen</Text>
      <Button
        title="Go To DynamicSizeItemScroll Screen"
        onPress={() => navigation.navigate(SCREEN_NAMES.DynamicSizeItemScroll)}
      />
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

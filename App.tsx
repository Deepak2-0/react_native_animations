/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// As mentioned by Moti
import 'react-native-reanimated';
import 'react-native-gesture-handler';

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import DefaultScreen from './src/Components/1HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DynamicSizeItemScroll from './src/Components/2DynamicSizeItemScroll';
import DynamicSizeItemScrollMoti from './src/Components/3DynamicSizeItemScrollMoti';
import {SCREEN_NAMES} from './src/utils/constants';
import PhoneRingIndicatorWave from './src/Components/4PhoneRingIndicatorWave';
import GalleryViewSyncFlatLists from './src/Components/5GalleryViewSyncFlatLists';
import ScrollItemAnimationEffect from './src/Components/6ScrollItemAnimationEffect';
import CarouselAnimation from './src/Components/7CarouselAnimation';
import ThreeDCarouselAnimation from './src/Components/8ThreeDCarouselAnimation';
import FirstReanimatedAnimation from './src/reanimated/1FirstReanimatedAnimation';
import AnimatingStyleAndProps from './src/reanimated/2AnimatingStyleAndProps';
import ApplyingModifiers from './src/reanimated/3ApplyingModifiers';
import {StyleSheet} from 'react-native';
import HandlingGestures from './src/reanimated/4HandlingGestures';
import WithTimingExample from './src/reanimated/5WithTimingExample';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SCREEN_NAMES.Home}>
          <Stack.Screen
            name={SCREEN_NAMES.Home}
            component={DefaultScreen}
            // options={{title: 'Home'}}
          />
          <Stack.Screen
            name={SCREEN_NAMES.DynamicSizeItemScroll}
            component={DynamicSizeItemScroll}
          />
          <Stack.Screen
            name={SCREEN_NAMES.DynamicSizeItemScrollUsingMoti}
            component={DynamicSizeItemScrollMoti}
          />
          <Stack.Screen
            name={SCREEN_NAMES.PhoneRingIndicatorWave}
            component={PhoneRingIndicatorWave}
          />
          <Stack.Screen
            name={SCREEN_NAMES.GalleryViewSyncFlatLists}
            component={GalleryViewSyncFlatLists}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ScrollItemAnimationEffect}
            component={ScrollItemAnimationEffect}
          />
          <Stack.Screen
            name={SCREEN_NAMES.CarouselAnimation}
            component={CarouselAnimation}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ThreeDCarouselAnimation}
            component={ThreeDCarouselAnimation}
          />
          <Stack.Screen
            name={SCREEN_NAMES.FirstReanimatedAnimation}
            component={FirstReanimatedAnimation}
          />
          <Stack.Screen
            name={SCREEN_NAMES.AnimatingStyleAndProps}
            component={AnimatingStyleAndProps}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ApplyingModifiers}
            component={ApplyingModifiers}
          />
          <Stack.Screen
            name={SCREEN_NAMES.HandlingGestures}
            component={HandlingGestures}
          />
          <Stack.Screen
            name={SCREEN_NAMES.WithTimingExample}
            component={WithTimingExample}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

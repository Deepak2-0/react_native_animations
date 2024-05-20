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

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

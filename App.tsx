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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

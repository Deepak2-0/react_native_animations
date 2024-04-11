/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import DefaultScreen from './src/Components/1HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DynamicSizeItemScroll from './src/Components/2DynamicSizeItemScroll';
import {SCREEN_NAMES} from './src/utils/constants';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

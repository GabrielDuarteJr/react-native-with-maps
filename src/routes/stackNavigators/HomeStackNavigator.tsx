import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '~/screens/HomeScreen/HomeScreen';
import {
  hiddenHeaderScreenOptions,
  hiddenGestureScreenOptions,
} from '~/utils/constants';

type RootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={hiddenGestureScreenOptions}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={hiddenHeaderScreenOptions}
    />
  </Stack.Navigator>
);

export default HomeStackNavigator;

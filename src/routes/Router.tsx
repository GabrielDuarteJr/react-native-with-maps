import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStackNavigator from '~/routes/stackNavigators/HomeStackNavigator';
import {
  hiddenHeaderScreenOptions,
  hiddenGestureScreenOptions,
} from '~/utils/constants';

type RootStackParamList = {
  HomeNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={hiddenGestureScreenOptions}>
      <Stack.Screen
        name="HomeNavigator"
        component={HomeStackNavigator}
        options={hiddenHeaderScreenOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Router;

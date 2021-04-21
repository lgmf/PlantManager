import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Colors } from '../design-system/palette';

import HomeScreen from '../home/Home';
import UserIdentificationScreen from '../user-identification/UserIdentification';
import ConfirmationScreen from '../confirmation/Confirmation';

const StackNavigator = createStackNavigator();

const screenOptions = {
  cardStyle: {
    backgroundColor: Colors.white,
  },
};

function StackNavigation() {
  return (
    <StackNavigator.Navigator headerMode="none" screenOptions={screenOptions}>
      <StackNavigator.Screen name="Home" component={HomeScreen} />
      <StackNavigator.Screen name="UserIdentification" component={UserIdentificationScreen} />
      <StackNavigator.Screen name="Confirmation" component={ConfirmationScreen} />
    </StackNavigator.Navigator>
  );
}

export default StackNavigation;

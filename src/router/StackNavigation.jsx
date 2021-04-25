import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@screens/home/Home';
import UserIdentificationScreen from '@screens/user-identification/UserIdentification';
import SuccessConfirmationScreen from '@screens/confirmation/SuccessConfirmation';
import PlantsSaveScreen from '@screens/plants/plants-save/PlantsSave';

import { useUserName } from '@store/user';

import TabsNavigation from './TabsNavigation';

const StackNavigator = createStackNavigator();

function StackNavigation() {
  const userName = useUserName();

  return (
    <StackNavigator.Navigator
      headerMode="none"
      initialRouteName="Home"
    >
      <StackNavigator.Screen
        name="Plants"
        component={TabsNavigation}
      />

      <StackNavigator.Screen
        name="SuccessConfirmation"
        component={SuccessConfirmationScreen}
      />

      {
        Boolean(userName) ? (
          <>
            <StackNavigator.Screen
              name="PlantsSave"
              component={PlantsSaveScreen}
            />
          </>
        ) : (
          <>
            <StackNavigator.Screen
              name="Home"
              component={HomeScreen}
            />

            <StackNavigator.Screen
              name="UserIdentification"
              component={UserIdentificationScreen}
            />
          </>
        )
      }
    </StackNavigator.Navigator>
  );
}

export default StackNavigation;

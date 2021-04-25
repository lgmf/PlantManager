import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../home/Home';
import UserIdentificationScreen from '../user-identification/UserIdentification';
import SuccessConfirmationScreen from '../confirmation/SuccessConfirmation';
import PlantsSaveScreen from '../plants/plants-save/PlantsSave';

import { useUserName } from '../user-identification/hooks';

import TabsNavigation from './TabsNavigation';

const StackNavigator = createStackNavigator();

function StackNavigation() {
  const userName = useUserName();

  return (
    <StackNavigator.Navigator
      headerMode="none"
      initialRouteName="Home"
    >
      {

        // eslint-disable-next-line no-extra-boolean-cast
        Boolean(userName) ? (
          <>
            <StackNavigator.Screen
              name="Plants"
              component={TabsNavigation}
            />

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

      <StackNavigator.Screen
        name="SuccessConfirmation"
        component={SuccessConfirmationScreen}
      />
    </StackNavigator.Navigator>
  );
}

export default StackNavigation;

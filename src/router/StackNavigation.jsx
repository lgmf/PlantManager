import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Colors } from '../design-system/palette';

import HomeScreen from '../home/Home';
import UserIdentificationScreen from '../user-identification/UserIdentification';
import SuccessConfirmationScreen from '../confirmation/SuccessConfirmation';
import PlantSelectScreen from '../plants/plants-select/PlantSelect';
import PlantsSaveScreen from '../plants/plants-save/PlantsSave';
import MyPlantsScreen from '../plants/my-plants/MyPlants';

const StackNavigator = createStackNavigator();

const screenOptions = {
  cardStyle: {
    backgroundColor: Colors.white,
  },
};

function StackNavigation() {
  return (
    <StackNavigator.Navigator headerMode="none" initialRouteName="Home" screenOptions={screenOptions}>
      <StackNavigator.Screen name="Home" component={HomeScreen} />
      <StackNavigator.Screen name="UserIdentification" component={UserIdentificationScreen} />
      <StackNavigator.Screen name="SuccessConfirmation" component={SuccessConfirmationScreen} />
      <StackNavigator.Screen name="PlantSelect" component={PlantSelectScreen} />
      <StackNavigator.Screen name="PlantSave" component={PlantsSaveScreen} />
      <StackNavigator.Screen name="MyPlants" component={MyPlantsScreen} />
    </StackNavigator.Navigator>
  );
}

export default StackNavigation;

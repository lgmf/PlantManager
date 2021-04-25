import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import { Colors } from '@design-system/palette';

import PlantSelectScreen from '@screens/plants/plants-select/PlantSelect';
import MyPlantsScreen from '@screens/plants/my-plants/MyPlants';

const TabNavigator = createBottomTabNavigator();

function TabsNavigation() {
  return (
    <TabNavigator.Navigator
      initialRouteName="PlantSelect"
      lazy={false}
      tabBarOptions={{
        activeTintColor: Colors.green,
        inactiveTintColor: Colors.heading,
        labelPosition: 'beside-icon',
        style: {
          height: 88,
        },
      }}
    >
      <TabNavigator.Screen
        name="PlantSelect"
        component={PlantSelectScreen}
        options={{
          title: 'Nova Planta',
          tabBarIcon({ size, color }) {
            return (
              <MaterialIcons
                name="add-circle-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      <TabNavigator.Screen
        name="MyPlants"
        component={MyPlantsScreen}
        options={{
          title: 'Minhas Plantas',
          tabBarIcon({ size, color }) {
            return (
              <MaterialIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </TabNavigator.Navigator>
  );
}

export default TabsNavigation;

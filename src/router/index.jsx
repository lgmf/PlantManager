import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Colors } from '@design-system/palette';

import StackNavigation from './StackNavigation';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

function Router() {
  return (
    <NavigationContainer theme={Theme}>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default Router;

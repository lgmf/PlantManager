import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './StackNavigation';

function Router() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default Router;

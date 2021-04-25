import React from 'react';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_100Thin,
} from '@expo-google-fonts/jost';

import { UserProvider } from './src/store/user';
import Router from './src/router';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_100Thin,
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (fontsLoaded) {
    return (
      <UserProvider>
        <Router />
      </UserProvider>
    );
  }

  return <AppLoading />;
}

import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_100Thin,
} from '@expo-google-fonts/jost';

import Router from './src/router';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_100Thin,
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const { plant } = notification.request.content.data;
        // eslint-disable-next-line no-console
        console.log('notification received ====>', plant.name);
      },
    );

    return () => subscription.remove();
  }, []);

  if (fontsLoaded) {
    return <Router />;
  }

  return <AppLoading />;
}

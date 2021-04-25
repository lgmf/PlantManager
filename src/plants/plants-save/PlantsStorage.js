import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DateUtils } from '../../utils';

const SAVED_PLANTS_STORAGE_KEY = '@plantManger.savedPlants';

function createNotificationDate(notificationTime) {
  const [hour, minute] = notificationTime.split(':');
  return DateUtils()
    .hour(hour)
    .minute(minute)
    .second(0)
    .utc(true);
}

const PlantsStorage = {
  async load() {
    try {
      const jsonStr = await AsyncStorage.getItem(SAVED_PLANTS_STORAGE_KEY);
      return JSON.parse(jsonStr || {});
    } catch (error) {
      return {};
    }
  },
  async save(next) {
    const savedPlants = await this.load();

    if (savedPlants[next.id]) {
      return savedPlants;
    }

    const allPlants = {
      ...savedPlants,
      [next.id]: {
        data: {
          ...next,
          notificationDate: createNotificationDate(next.notificationTime),
        },
      },
    };

    await AsyncStorage.setItem(SAVED_PLANTS_STORAGE_KEY, JSON.stringify(allPlants));

    return allPlants;
  },
};

function toPlant(savedPlant) {
  return savedPlant.data;
}

function byNotificationDate(a, b) {
  const aNotificationDate = DateUtils(a.notificationDate);
  const bNotificationDate = DateUtils(b.notificationDate);
  return aNotificationDate.isAfter(bNotificationDate) ? 1 : -1;
}

export function useSavedPlants() {
  const [loading, setLoading] = useState(false);
  const [savedPlants, setSavedPlants] = useState([]);

  useEffect(() => {
    setLoading(true);

    PlantsStorage
      .load()
      .then((loadedPlants) => {
        const plants = Object
          .values(loadedPlants)
          .filter(Boolean)
          .map(toPlant)
          .sort(byNotificationDate);

        setSavedPlants(plants);
      })
      .finally(() => setLoading(false));
  }, []);

  return [savedPlants, loading];
}

export default PlantsStorage;

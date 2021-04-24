import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SAVED_PLANTS_STORAGE_KEY = '@plantManger.savedPlants';

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
    const savedPlants = this.load();

    if (savedPlants[next.id]) {
      return savedPlants;
    }

    const allPlants = {
      ...savedPlants,
      [next.id]: {
        data: next,
      },
    };

    await AsyncStorage.setItem(SAVED_PLANTS_STORAGE_KEY, JSON.stringify(allPlants));

    return allPlants;
  },
};

export function useSavedPlants() {
  const [savedPlants, setSavedPlants] = useState([]);

  useEffect(() => {
    PlantsStorage
      .load()
      .then((loadedPlants) => {
        const plants = Object
          .values(loadedPlants)
          .filter(Boolean)
          .map((it) => it.data);

        setSavedPlants(plants);
      });
  }, []);

  return savedPlants;
}

export default PlantsStorage;

import AsyncStorage from '@react-native-async-storage/async-storage';

const SAVED_PLANTS_STORAGE_KEY = '@plantManger.savedPlants';

export default {
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

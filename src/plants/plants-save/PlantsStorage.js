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

function toPlant(savedPlant) {
  return savedPlant.data;
}

function byNotificationDate(a, b) {
  const aNotificationDate = DateUtils(a.notificationDate);
  const bNotificationDate = DateUtils(b.notificationDate);
  return aNotificationDate.isAfter(bNotificationDate) ? 1 : -1;
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
  async list() {
    const savedPlants = await PlantsStorage.load();
    const plants = Object
      .values(savedPlants)
      .filter(Boolean)
      .map(toPlant)
      .sort(byNotificationDate);

    return plants;
  },
  async remove(id) {
    const savedPlants = await PlantsStorage.load();
    delete savedPlants[id];
    await AsyncStorage.setItem(SAVED_PLANTS_STORAGE_KEY, JSON.stringify(savedPlants));
    return this.list();
  },
};

export default PlantsStorage;

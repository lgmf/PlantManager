import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DateUtils } from '@utils';

const SAVED_PLANTS_STORAGE_KEY = '@plantManger.savedPlants';

function createNotificationDate(notificationTime) {
  const [hour, minute] = notificationTime.split(':');
  return DateUtils()
    .hour(hour)
    .minute(minute)
    .second(0)
    .utc(true);
}

async function createNotification(plant) {
  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Heey 🌱',
      body: `Esta na hora de cuidar da sua ${plant.name}`,
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      data: { plant },
    },
    trigger: {
      seconds: 60,
      repeats: true,
    },
  });

  // eslint-disable-next-line no-console
  console.log(plant.name, 'notification created', notificationId);

  return notificationId;
}

async function cancelNotification(id) {
  await Notifications.cancelScheduledNotificationAsync(id);
  // eslint-disable-next-line no-console
  console.log('notification canceled', id);
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
      return savedPlants[next.id].data;
    }

    const newPlant = {
      notificationId: null,
      data: {
        ...next,
        notificationDate: createNotificationDate(next.notificationTime),
      },
    };

    const notificationId = await createNotification(newPlant.data);

    const allPlants = {
      ...savedPlants,
      [next.id]: {
        ...newPlant,
        notificationId,
      },
    };

    await AsyncStorage.setItem(SAVED_PLANTS_STORAGE_KEY, JSON.stringify(allPlants));

    return newPlant.data;
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
    const plantToDelete = savedPlants[id];

    await cancelNotification(plantToDelete.notificationId);

    delete savedPlants[id];

    await AsyncStorage.setItem(SAVED_PLANTS_STORAGE_KEY, JSON.stringify(savedPlants));

    return this.list();
  },
};

export default PlantsStorage;

import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_NAME_STORAGE_KEY = '@plantManager:userName';

export default {
  loadUserName() {
    return AsyncStorage.getItem(USER_NAME_STORAGE_KEY);
  },
  saveUserName(next) {
    return AsyncStorage.setItem(USER_NAME_STORAGE_KEY, next);
  },
};

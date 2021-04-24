import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_NAME_STORAGE_KEY = '@plantManager:userName';

export function saveUserName(next) {
  return AsyncStorage.setItem(USER_NAME_STORAGE_KEY, next);
}

function useUserName() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    AsyncStorage
      .getItem(USER_NAME_STORAGE_KEY)
      .then((next) => setUserName(next));
  });

  return userName;
}

export default useUserName;

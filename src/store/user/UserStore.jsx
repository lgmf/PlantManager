import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import AppLoading from 'expo-app-loading';

import UserStorage from './UserStorage';

const initialState = {
  userName: '',
};

const UserStore = createContext(initialState);

export function useUserName() {
  const { state: { userName } } = useContext(UserStore);
  return userName;
}

export function useUserActions() {
  const { actions } = useContext(UserStore);
  return actions;
}

export function UserProvider({ children }) {
  const [loadingState, setLoadingState] = useState(true);
  const [state, setState] = useState(initialState);

  function setUserName(next) {
    setState((prevState) => ({
      ...prevState,
      userName: next ?? '',
    }));
  }

  const value = {
    state,
    actions: {
      async saveUserName(next) {
        await UserStorage.saveUserName(next);
        setUserName(next);
      },
    },
  };

  useEffect(() => {
    UserStorage
      .loadUserName()
      .then((next) => {
        setUserName(next);
        setLoadingState(false);
      });
  }, []);

  if (loadingState) {
    return <AppLoading />;
  }

  return (
    <UserStore.Provider value={value}>
      {children}
    </UserStore.Provider>
  );
}

export default UserStore;

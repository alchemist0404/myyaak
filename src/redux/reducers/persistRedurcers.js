import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

export default (reducers) => {
  const persistedReducer = persistReducer(persistConfig, reducers);
  return persistedReducer;
};

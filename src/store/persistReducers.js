import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'real-valor',
      storage,
      whitelist: ['auth', 'user', 'bitcoin'],
    },
    reducers
  );

  return persistedReducer;
};


import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'myapproot',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});
const persistor = persistStore(store);

export { store, persistor };

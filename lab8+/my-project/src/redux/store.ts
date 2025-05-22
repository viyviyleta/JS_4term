import { legacy_createStore as createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;

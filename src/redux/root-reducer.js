import {
  combineReducers
} from 'redux';
import {
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import centerReducer from './center/center.reducer';
import filterReducer from './filter/filter.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  center: centerReducer,
  filter: filterReducer
});

export default persistReducer(persistConfig, rootReducer);
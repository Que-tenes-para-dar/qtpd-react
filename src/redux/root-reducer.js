import {
  combineReducers
} from 'redux';
import {
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import organizationReducer from './organization/organization.reducer';
import centerReducer from './center/center.reducer';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['cart']
};

const rootReducer = combineReducers({
  // organization: organizationReducer
  center: centerReducer
});

export default persistReducer(persistConfig, rootReducer);
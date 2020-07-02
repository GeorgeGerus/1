import { createStore, combineReducers } from 'redux';

import app from './ducks/app';

const reducers = combineReducers({ app });

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

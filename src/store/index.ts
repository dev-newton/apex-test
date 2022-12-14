import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import ReduxThunk from "redux-thunk";
import githubReducer from "./reducers/githubReducer";

const rootReducer = combineReducers({
  github: githubReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
  let persistor = persistStore(store);

  return { store, persistor };
};

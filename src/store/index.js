import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

const persistConfig = {
  key: "flasc",
  stateReconciler: autoMergeLevel2,
  storage: AsyncStorage,
  whitelist: [""],
};

import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

import ReactotronConfig from "../reactotron";

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const enhancers = [];

if (__DEV__) {
  const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  if (devTools) {
    enhancers.push(devTools);
  }

  enhancers.push(ReactotronConfig.createEnhancer());
}
const composedEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  ...enhancers
);

const configureStore = () => {
  let store = createStore(persistedReducer, {}, composedEnhancers);
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export const { store, persistor } = configureStore();

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducer } from "./redux";
import { watcherSaga } from "./saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware))
);

// run the saga
sagaMiddleware.run(watcherSaga);

export default store

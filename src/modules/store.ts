import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import rootSaga from './sagas';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const middlewares = [sagaMiddleware];
  const enhancers = [] as any[];

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    createReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers,
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export const store = configureStore();

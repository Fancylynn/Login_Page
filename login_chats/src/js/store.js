import { applyMiddleware, createStore } from "redux"
import 'babel-polyfill';

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import index from './sagas'

import reducer from "./reducers"


import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(promise(), thunk, logger(), sagaMiddleware);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(middleware))

sagaMiddleware.run(index)

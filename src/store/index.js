/**
 * Core Packages
 */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

/**
 * Sagas and Reducers
 */
import rootSaga from './root.saga';
import rootReducer from './root.reducer';

/**
 * Middlewares creation
 */
const sagaMiddleware = createSagaMiddleware();
let middlewares      = [
    sagaMiddleware,
];

/**
 * Dev Middlewares
 */
if (['development'].includes(process.env.NODE_ENV)) {
    middlewares = [
        ...middlewares,
        logger,
    ];
}

/**
 * Stores Itself
 */
const store = createStore(rootReducer, applyMiddleware(...middlewares));

/**
 * Running Sagas
 */
sagaMiddleware.run(rootSaga);

/**
 * Exporting Stores
 */
export default store;

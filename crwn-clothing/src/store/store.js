import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user', 'categories'],
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();
const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
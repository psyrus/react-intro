import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user', 'categories'],
    whitelist: ['cart']
}
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);

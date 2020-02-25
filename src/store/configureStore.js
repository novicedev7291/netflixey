import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from '../reducers';
import logger from "redux-logger";
import api from "../middlewares/api";
import DevTools from "../containers/DevTools";
import toastMiddleware from "../middlewares/toast";
import { persistStore } from "redux-persist";

export default (initialState) => {
    const store = createStore(
        rootReducer,
        initialState, 
        compose(
            applyMiddleware(api, toastMiddleware, logger),
            DevTools.instrument()
        )
        );
    const persiststore = persistStore(store);

    if(module.hot){
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return { store, persiststore } ;
};
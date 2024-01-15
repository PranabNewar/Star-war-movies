import {combineReducers, configureStore } from "@reduxjs/toolkit";
import favReducer from "./favSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage
}
// const appStore = configureStore({ 
//     reducer : {
//         favorite:favReducer
//     },
// }
// );
const rootRducer =  combineReducers({favorite:favReducer}) 

const persistedReducer = persistReducer(persistConfig,rootRducer)
export const appStore = configureStore({ 
    reducer: persistedReducer
}
);
export const persistor = persistStore(appStore)

// export default appStore;

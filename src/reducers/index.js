import { combineReducers } from "redux";
import selectedMovie from "./selectedMovie";
import movies from "./movies";
import isLoading from "./isLoading";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    movies,
    selectedMovie, 
    isLoading
});

const persistedReducer = persistReducer(
    {
        key: "netflixey",
        storage
    },
    rootReducer
);

export default persistedReducer;
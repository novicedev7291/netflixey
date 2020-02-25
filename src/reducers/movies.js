import { handleActions } from "redux-actions";
import { produce } from "immer";
import { GET_MOVIES, SET_MOVIES, RATE_MOVIE } from "../constants/actionTypes";

export default handleActions({
    [GET_MOVIES] : (state, action) => state,
    [SET_MOVIES] : (state, action) => action.payload,
    [RATE_MOVIE]: produce((state, action) => {
        const { rate, movieId } = action.payload;
        state[movieId].rating = rate;
    })
}, {});
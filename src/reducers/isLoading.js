import {  handleActions } from "redux-actions";
import { GET_MOVIES } from "../constants/labels";
import { API_START, API_END } from "../constants/actionTypes";
import { produce } from "immer";

export default handleActions({
     [API_START] : produce((state, action) => {
         if(action.payload === GET_MOVIES)
            state[GET_MOVIES] = true;
     }),
     [API_END] : produce((state, action) => {
         if(action.payload === GET_MOVIES)
            state[GET_MOVIES] = false;
     })
}, {});
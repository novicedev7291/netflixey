import { API_START, API_END } from "../constants/actionTypes";
import { createAction } from "redux-actions";

export const apiStart = createAction(API_START);

export const apiEnd = createAction(API_END);
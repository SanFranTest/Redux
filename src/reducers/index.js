import {combineReducers} from 'redux';
import {pageReducer} from "./page";
import {userReducer} from "./user";

export const initialState = {
    page: pageReducer,
    user: userReducer,
};

export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
});

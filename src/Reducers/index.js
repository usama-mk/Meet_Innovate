import { combineReducers } from "redux";
import selectPageReducer from './selectPage.js'

export const allReducers= combineReducers({
    selectedPage: selectPageReducer
})

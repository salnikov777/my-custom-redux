import {CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types";
import {combineReducers} from "redux";


function counterReducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

const initialThemeState = {
    value: 'light',
    disable: false
}

function themeReducer(state = initialThemeState, action) {
    switch(action.type){
        case CHANGE_THEME:
            return {...state, value: 'dark'}

        case ENABLE_BUTTONS:
            return {...state, disable: false}

        case DISABLE_BUTTONS:
            return {...state, disable: true}

        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})
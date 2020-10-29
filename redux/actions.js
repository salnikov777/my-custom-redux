import {ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disableButtons())

        setTimeout(()=>{
            dispatch(increment())
            dispatch(enableButtons())
        }, 1000)

    }
}

export  function changeTheme() {
    return{
        type: CHANGE_THEME
    }
}

export  function enableButtons() {
    return{
        type: ENABLE_BUTTONS
    }
}

export  function disableButtons() {
    return{
        type: DISABLE_BUTTONS
    }
}
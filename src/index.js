import './styles.css'
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
// import {createStore} from "./createStore";
import {rootReducer} from "../redux/rootReducer";
import {asyncIncrement, changeTheme, decrement, increment} from "../redux/actions";

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const theme = document.getElementById('theme')


function logger(state){
    return function (next){
        return function (action) {
            // console.log(state);
            // console.log(action);
            // console.log(next);
            return next(action)
        }
    }
}

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);




addBtn.addEventListener('click',()=>{
    store.dispatch(increment())
})

subBtn.addEventListener('click',()=>{
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click',()=>{
    store.dispatch(asyncIncrement())
})

store.subscribe(()=> {
    const state = store.getState()
    counter.textContent = state.counter;
    document.body.classList.toggle(state.theme.value);
    [addBtn, subBtn, asyncBtn, theme].forEach((b)=>{
        b.disabled = state.theme.disable
    })
})

store.dispatch({type: 'INIT_APPLICATION'})

theme.addEventListener('click',()=>{

    store.dispatch(changeTheme())
})


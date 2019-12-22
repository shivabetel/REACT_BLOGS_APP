import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from '../reducer'
const middleWares = [
    thunkMiddleWare
]

export default function (preloadedState = {}) {
    return createStore(rootReducer, preloadedState, applyMiddleware(...middleWares))
}


import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducer/index'
const InitialState = {
    reg: '',
    meter: '',
    contractlength: '',
    commission: '',
    prices: []
}
export const store = createStore(reducer, InitialState, applyMiddleware(thunk))
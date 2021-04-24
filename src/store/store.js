import {createStore} from 'redux'
import CounterReducer from '../reducers/CountReducers';
const store=createStore(CounterReducer)
export default store
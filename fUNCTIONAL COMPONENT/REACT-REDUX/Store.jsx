import {legacy_createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from './CakeReducer'


const store = legacy_createStore(reducer,composeWithDevTools(applyMiddleware(logger)))

export default store;
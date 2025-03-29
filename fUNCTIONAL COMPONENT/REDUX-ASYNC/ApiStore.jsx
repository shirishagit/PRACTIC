import {legacy_createStore, applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from './ApiReducer';

const store = legacy_createStore(reducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store;
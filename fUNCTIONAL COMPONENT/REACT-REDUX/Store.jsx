import {legacy_createStore} from 'redux'
import reducer from './CakeReducer'

const store = legacy_createStore(reducer)

export default store;
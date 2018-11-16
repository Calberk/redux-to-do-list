import {combineReducers} from 'redux';
import list_reducer from './list_reducer';

const rootReducer = combineReducers({
    list: list_reducer,
})

export default rootReducer;
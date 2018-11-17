import {combineReducers} from 'redux';
import list_reducer from './list_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
    list: list_reducer,
    
})

export default rootReducer;
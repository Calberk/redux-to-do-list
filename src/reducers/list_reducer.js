import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {}
}

export default (state=DEFAULT_STATE, action)=>{
    switch (action.type){
        case types.GET_ALL_LIST_DATA:
            return {...state, all: action.payload.data.todos};
        case types.GET_SINGLE_ITEM:
            console.log(action);
            return {...state, single: action.payload.data.todo}  //adding what we call from action and saves it to state under single (above)
        default:
            return state;
    }

}

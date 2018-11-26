export default (store) => (next) => async (action) => {     //template for defining middleware (ES6 version)
    //any middleware code
    if(!action.payload || !action.payload.then){
        //no payload
        // or
        //not a payload
        return next(action);
    }

    //has a promise on the payload property

    // export default function (store){   //same as above
//     return function(next){
//         return function(action){
//             //code goes here
//         }
//     }
// }

    const resp = await action.payload;

    const newAction = {
    ...action,
    payload: resp
    }

    store.dispatch(newAction);

    return resp;

//     action.payload.then((resp) => {
//         const newAction = {
//             ...action,
//             payload: resp
//         }

//         store.dispatch(newAction);
//     });

//     return action.payload;   //

}


import { types } from "../Type/types";


//////<<<<<------------------------------------------------``


const initialState = 
{
    uid : null,
    userName : null,
    liked : [],
    logged : false,
    loading : false
};

const authReducer = ( state = initialState, action ) =>
{

    switch ( action.type ) 
    {

        case types.authLogin : return { ...state, uid : action.payload._id, userName : action.payload.userName, logged : true, liked : action.payload.liked };

        case types.authLogout : return initialState;

        default: return state;
            
    };

};

//////---------------------------------------------->>>>>

export { authReducer };
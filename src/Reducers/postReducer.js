import { types } from "../Type/types";


//////<<<<<------------------------------------------------``


const initialState = 
{
    posts : []
};

const postReducer = ( state = initialState, action ) =>
{

    switch ( action.type ) 
    {

        case types.postLoad : return { ...state, posts : [ ...action.payload ] };

        case types.authLogout : return initialState;

        default: return state;
            
    };

};

//////---------------------------------------------->>>>>

export { postReducer };
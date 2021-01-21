import { types } from "../Type/types";


//////<<<<<------------------------------------------------``


const initialState = 
{
    categories : [],
    activeCategory : null
};

const categoryReducer = ( state = initialState, action ) =>
{

    switch ( action.type ) 
    {

        case types.categoryLoad : return { ...state, categories : [ ...action.payload ] };

        case types.authLogout : return initialState;

        default: return state;
            
    };

};

//////---------------------------------------------->>>>>

export { categoryReducer };
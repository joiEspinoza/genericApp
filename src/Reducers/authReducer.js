
const initialState = 
{
    uid : null,
    userName : null,
    logged : false
};

const authReducer = ( state = initialState, action ) =>
{

    switch ( action.type ) 
    {

        default: return state;
            
    };

};

//////---------------------------------------------->>>>>

export { authReducer };
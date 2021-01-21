

const swalMsg = ( response = {} ) =>
{

    if( !response.errors )
    {

        return response.msg;
    
    }
    else if( response.errors.password )
    {

        return response.errors.password.msg;

    }
    else if( response.errors.email )
    {
        
        return response.errors.email.msg;

    }
    else if( response.errors.userName )
    {
        
        return response.errors.userName.msg;

    }
    else if( response.errors.categoryName )
    {

        return response.errors.categoryName.msg;

    }
    else if( response.errors.categoryColor )
    {

        return response.errors.categoryColor.msg;

    }
    else if( response.errors.userCreatorId )
    {

        return response.errors.userCreatorId.msg;

    };
};


//////---------------------------------------------->>>>>

export { swalMsg };
import { BackendConnect } from "../Backend/BackendConnect";
import Swal from 'sweetalert2';

//////<<<<<------------------------------------------------``

const startRegister = ( newUser ) =>
{
    return async () => 
    {

        try 
        {

            const request = await BackendConnect( 'auth/register', newUser, 'POST' );
            const response = await request.json();

            if( request.ok )
            {
                Swal.fire( 'success','User created successfully', 'success' );
            }
            else
            {

                if( !response.errors )
                {
                    return Swal.fire( 'error', response.msg, 'error' );
                };

                if( response.errors.password )
                {
                    return Swal.fire( 'error', response.errors.password.msg, 'error' );
                };

                if( response.errors.email )
                {
                    return Swal.fire( 'error', response.errors.email.msg, 'error' );
     
                };

                if( response.errors.userName )
                {
                    return Swal.fire( 'error', response.errors.userName.msg, 'error' )
                };

            };


        } 
        catch( error ) 
        {
            console.log( error )
            return Swal.fire( 'error', 'Something went wrong', 'error' )
        };

    };
};

//////---------------------------------------------->>>>>

export { startRegister };

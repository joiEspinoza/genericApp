import { BackendConnect } from "../Backend/BackendConnect";
import Swal from 'sweetalert2';
import { swalMsg } from "../Helper/swalMsg";
import { types } from "../Type/types";

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
                
                return Swal.fire( '', 'User created successfully', 'success' );
                
            }
            else
            {

                return Swal.fire( '', swalMsg( response ) , 'error' );

            };

        } 
        catch( error ) 
        {

            console.log( error );
            return Swal.fire( '', 'Something went wrong', 'error' );
           
        };

    };
    
};


const startLogin = ( userData ) =>
{

    return async ( dispatch ) =>
    {

        try 
        {
            const request = await BackendConnect( 'auth', userData, 'POST' );
            const response = await request.json();

            if( response.ok )
            {
                dispatch( login( response.loggedUser ) );
            }
            else
            {
                return Swal.fire( '', swalMsg( response ) , 'error' );
            };

        } 
        catch( error )
        {
            console.log( error );
            return Swal.fire( '', 'Something went wrong', 'error' );
        };

    };
};
const login = ( user ) => ( { type : types.authLogin, payload : user } );


const logout = () => ( { type : types.authLogout } );

//////---------------------------------------------->>>>>

export { startRegister, startLogin, logout };

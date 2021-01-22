import Swal from "sweetalert2";
import { BackendConnect } from "../Backend/BackendConnect";
import { swalMsg } from "../Helper/swalMsg";
import { types } from "../Type/types";

//////<<<<<------------------------------------------------``


const startCreatePost = ( newPost ) =>
{
    return async ( dispatch ) =>
    {

        try 
        {
            const request = await BackendConnect( 'post', newPost, 'POST' );
            const response = await request.json();

            if( response.ok )
            {
                Swal.fire( '', 'Post created succefuly', 'success' );

                dispatch( starLoadPosts() );

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

const starLoadPosts = () =>
{
    return async ( dispatch ) =>
    {

        try
        {

            const request = await BackendConnect( 'post', {}, 'GET' );
            const response = await request.json();

            if( response.ok )
            {
                dispatch( loadPost( response.posts ) );
            }
            else
            {
                dispatch( loadPost( [] ) );
            };
            
        } 
        catch( error ) 
        {
            console.log( error );
            return Swal.fire( '', 'Something went wrong', 'error' );
        };

    };
};
const loadPost = ( posts ) => ( { type : types.postLoad, payload : posts } )


//////---------------------------------------------->>>>>


export { startCreatePost, starLoadPosts };
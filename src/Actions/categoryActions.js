import Swal from "sweetalert2";
import { BackendConnect } from "../Backend/BackendConnect";
import { swalMsg } from "../Helper/swalMsg";
import { types } from "../Type/types";

//////<<<<<------------------------------------------------``


const startCreateCategory = ( newCategory ) =>
{
    return async ( dispatch ) =>
    {

        try 
        {
            const request = await BackendConnect( 'category', newCategory, 'POST' );
            const response = await request.json();

            if( response.ok )
            {
                Swal.fire( '', 'Category created succefuly', 'success' );

                dispatch( startLoadCategories() );
                
                document.getElementById( 'closeModalBtn' ).click();
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

const startLoadCategories = () =>
{

    return async ( dispatch ) =>
    {
        try 
        {

            const request = await BackendConnect( 'category', {} , 'GET' );
            const respone = await request.json();

            if( respone.ok )
            {
                dispatch( loadingCategories( respone.categories ) );
            }
            else
            {
                dispatch( loadingCategories( [] ) );
            };

        } 
        catch( error ) 
        {
            console.log( error );
            return Swal.fire( '', 'Something went wrong', 'error' );
        };
    };
    
};
const loadingCategories = ( categories ) => ( { type : types.categoryLoad, payload : categories } );

//////---------------------------------------------->>>>>


export { startCreateCategory, startLoadCategories };
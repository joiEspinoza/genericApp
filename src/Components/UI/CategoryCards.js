import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadActiveCategory } from '../../Actions/categoryActions';

//////<<<<<------------------------------------------------``


const CategoryCards = () => 
{

    const { categories } = useSelector( state => state.category );

    const history = useHistory();
    const dispatch = useDispatch();
    const handleRedirect = ( categoryId ) =>
    {

        const category = categories.find( ( category ) => category._id === categoryId  );
        
        dispatch( loadActiveCategory( category ) );

        history.push( "/category" );
    }


///////////////////////////************************////////////////////////

    return (


        <>

            {
                categories.map( ( category ) => {

                   return <div className="col-md-2" key={ category._id }>

                            <div className="card">

                                <div className="card-body text-center">

                                    <i onClick={ () => { handleRedirect( category._id ) } } style={ { color : category.categoryColor } } className="pointer fas fa-egg">

                                        <p>
                                           <small className="smallName text-muted">{ category.categoryName }</small>
                                        </p> 

                                    </i>
                                  
                                </div>

                            </div>

                          </div>

                } )
            }

        </>

    );

};

//////---------------------------------------------->>>>>

export default CategoryCards;

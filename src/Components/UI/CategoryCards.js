import React from 'react';
import { useSelector } from 'react-redux';

//////<<<<<------------------------------------------------``


const CategoryCards = () => 
{

    const { categories } = useSelector( state => state.category );

///////////////////////////************************////////////////////////

    return (


        <>

            {
                categories.map( ( category ) => {

                   return <div className="col-md-2" key={ category._id }>

                            <div className="card">

                                <div className="card-body text-center">
                                    <i style={ { color : category.categoryColor } } className="pointer fas fa-egg"></i>
                                    <br/>
                                    <p className="mt-2">{ category.categoryName }</p>
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

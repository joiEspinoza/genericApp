import React from 'react';
import { useSelector } from 'react-redux';

//////<<<<<------------------------------------------------``


const PostCards = () => 
{

    const { posts } = useSelector( state => state.post );
    const { activeCategory } = useSelector( state => state.category );


    let filterPosts;
    if( posts && activeCategory )
    {
        filterPosts = [ ...posts.filter( ( post ) => post.postCategory === activeCategory.categoryName ) ];
    };
    
    
///////////////////////////************************////////////////////////


    return (


        <>

            {
                filterPosts.map( ( post ) => {

                    return <div className="col-md-3" key={ post._id }>

                                <div className="card UI__cardPost rem3">

                                    <div className="card-header UI__cardPostHeader">
                                        <p>{ post.postTitle }</p>
                                    </div>

                                    <div className="card-body UI__cardPostBody">
                                        <p>{ post.postBody }</p>
                                    </div>

                                    <div className="card-footer text-muted">
                                        <button>Delete</button>
                                    </div>

                                </div>

                            </div>

                } )
            }

        </>

    );

};


//////---------------------------------------------->>>>>


export default PostCards;

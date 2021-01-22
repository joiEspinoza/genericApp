import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatePost } from '../../Actions/postActions';
import { CapitalLetter } from '../../Helper/capitalLetter';
import { useForm } from '../../Hook/useForm';
import PostCards from '../UI/PostCards';
import SideBar from '../UI/SideBar';

//////<<<<<------------------------------------------------``




const CategoryScreen = () => 
{

    const { uid } = useSelector( state => state.auth );
    const { activeCategory } = useSelector( state => state.category );

    const initFormValues = 
    {
        postCategory : activeCategory.categoryName,
        postTitle : '',
        postBody : '',
        postLike : 0,
        userCreatorId : uid
    }
    const [ formValues, handleInputChange, reset ] = useForm( initFormValues );
    const { postTitle, postBody } = formValues;
    const dispatch = useDispatch();
    const handleCreatePost = ( event ) =>
    {
        event.preventDefault();

        formValues.postTitle =  CapitalLetter( postTitle.trim() );
        formValues.postBody =  CapitalLetter( postBody.trim() );

        dispatch( startCreatePost( formValues ) );

        reset();
    };

///////////////////////////************************////////////////////////


    return (

        <div className='row'>


            <div className='col-md-2'>

                <SideBar/>

            </div>


            <div className='col-md-10 Dpadding'>

                <div className="container mt-5 p-1">

                    <div className="row">

                        <div className="col-md-12">

                            <div className="categoryScreen__cardPostBox">

                                <div className="card">
                                
                                    <div className="card-body categoryScreen__cardBodyPost">
                                        
                                        <form onSubmit={ handleCreatePost }>
                                        
                                            <div className="form-group">
                                                <label><small>Post title</small></label>
                                                <input type="text" className="form-control" name="postTitle" value={ postTitle } onChange={ handleInputChange } /> 
                                            </div>


                                            <div className="form-group mt-4">
                                                <label><small>Post body</small></label>
                                                <textarea className="form-control" name="postBody" value={ postBody } onChange={ handleInputChange }></textarea>
                                            </div>


                                            <div className="form-group mt-5">
                                                <button className="btn btn-primary form-control">Post</button>
                                            </div>
                                        
                                        </form>

                                    </div>

                                </div>

                            </div>    

                        </div>

                    </div>

                    <hr/>

                    <div className="row">

                        <PostCards/>

                    </div>

                </div>

            </div>


        </div>


    );

};


//////---------------------------------------------->>>>>

export default CategoryScreen;

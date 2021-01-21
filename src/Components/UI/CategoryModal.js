import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateCategory } from '../../Actions/categoryActions';
import { CapitalLetter } from '../../Helper/capitalLetter';
import { useForm } from '../../Hook/useForm';

//////<<<<<------------------------------------------------``

const CategoryModal = () => 
{

////////////////////// CREATE CATEGORY //////////////////////

    const { uid } = useSelector( state => state.auth );

    const initFormValue =
    {
        categoryName : '',
        categoryColor : '#696969',
        userCreatorId : uid
    };
    const [ formValues, handleInputChange, reset ] = useForm( initFormValue );
    const { categoryName, categoryColor } = formValues;

    const dispatch = useDispatch();
    const handleCreateCategory = ( event ) =>
    {
    
        event.preventDefault();

        formValues.categoryName = CapitalLetter( formValues.categoryName.trim() );  

        dispatch( startCreateCategory( formValues ) );
        reset();

    };

/////////////////////////////////////////////////////////////



///////////////////////////************************////////////////////////

    return (


        <div className="modal fade" id="categoryModal" tabIndex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">

            <div className="modal-dialog modal-dialog-centered">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="UI__titleModal modal-title" id="categoryModalLabel">New category</h5>
                        <i id="closeModalBtn" className="fas fa-times pointer" data-bs-dismiss="modal" aria-label="Close"></i>
                        
                    </div>

                    <form onSubmit={ handleCreateCategory } >

                    <div className="modal-body">

                    
                        <div className="form-group">
                            <label><small className="text-muted">Category name</small></label>
                            <input type="text" className="form-control" name="categoryName" autoComplete="off" value={ categoryName } onChange={ handleInputChange } />
                        </div>

                        <div className="form-group">
                            <label><small className="text-muted">Category color</small></label>
                            <input type="color" className="UI__inputColor form-control" name="categoryColor" value={ categoryColor } onChange={ handleInputChange } />
                        </div>


                    </div>

                    <div className="modal-footer">


                        <button type="submit" className="btn btn-primary form-control">Add category</button>

                    </div>

                    </form>

                </div>

            </div>

        </div>

    );
};

//////---------------------------------------------->>>>>

export default CategoryModal;

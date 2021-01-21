import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startRegister } from '../../Actions/authActions';
import { useForm } from '../../Hook/useForm';
import Swal from 'sweetalert2';
import { CapitalLetter } from '../../Helper/capitalLetter';

//////<<<<<------------------------------------------------``

const RegisterScreen = () => 
{


////////////////////// REGISTER //////////////////////

    const initFormValues = 
    {

        userName : 'King',
        email : 'king@gmail.com',
        password : '123456',
        password2 : '123456',
        liked : []

        
    };
    const [ formValues, handleInputChange ] = useForm( initFormValues );
    let { userName, email, password, password2 } = formValues;

    const dispatch = useDispatch();

    const handleRegister = ( event ) =>
    {
        event.preventDefault();

        if( formValues.password !== formValues.password2 )
        {
            return Swal.fire( '', 'Both passwords must be the same', 'error'  )
        };

        
        userName = CapitalLetter( userName.trim() );
        email = email.trim();
        password = password.trim();

        dispatch( startRegister( { userName, email, password } ) );
    };

///////////////////////////////////////////////////////



////////////////////// BACK ///////////////////////////

    const history = useHistory();

    const handleRedirectLogin = () =>
    {
        history.push( "/login" );
    };

///////////////////////////////////////////////////////


///////////////////////////************************////////////////////////

    return (


        <div className="auth__loginRegisterContainer">

            <div className="auth__topRegisterBox auth__loginRegisterBox">

                <form onSubmit={ handleRegister }>

                    <div className="form-group">
                        <label><small className="text-muted" >User name</small></label>
                        <input type="text" className="form-control" name="userName" autoComplete="off" value={ userName } onChange={ handleInputChange }  />
                    </div>

                    <div className="form-group">
                        <label><small className="text-muted" >Email</small></label>
                        <input type="email" className="form-control" name="email" autoComplete="off" value={ email } onChange={ handleInputChange } />
                    </div>

                    <div className="form-group">
                        <label><small className="text-muted" >Password</small></label>
                        <input type="password" className="form-control" name="password" value={ password } onChange={ handleInputChange } />
                    </div>

                    <div className="form-group">
                        <label><small className="text-muted" >Confirm Password</small></label>
                        <input type="password" className="form-control" name="password2" value={ password2 } onChange={ handleInputChange } />
                    </div>

                    <div className="form-group mt-5">
                        <button className="btn btn-primary form-control">Register</button>
                    </div>

                    <div className="form-group mt-1 text-center pointer">
                        <span onClick={ handleRedirectLogin } ><small className="linkR">Back</small></span>
                    </div>

                </form>

            </div>
            
        </div>


    );

};

//////---------------------------------------------->>>>>

export default RegisterScreen;

import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startLogin } from '../../Actions/authActions';
import { useForm } from '../../Hook/useForm';

//////<<<<<------------------------------------------------``

const LoginScreen = () => 
{


////////////////////// LOGIN //////////////////////

    const initFormValues = { email : "king@gmail.com", password : "123456" }

    const [ formValues, handleInputChange ] = useForm( initFormValues )

    const { email, password } = formValues;

    const dispatch = useDispatch();

    const handleLogin = ( event ) =>
    {
        event.preventDefault();
        dispatch( startLogin( formValues ) );
    };

///////////////////////////////////////////////////////



////////////////////// BTN REDIRECT //////////////////////

    const history = useHistory();

    const handleRedirectRegister = () =>
    {
        history.push( "/register" );
    };

///////////////////////////////////////////////////////


///////////////////////////************************////////////////////////

    return (


        <div className="auth__loginRegisterContainer">

            <div className="auth__loginRegisterBox">

                <form onSubmit={ handleLogin } >

                    <div className="form-group">
                        <label><small className="text-muted" >Email</small></label>
                        <input type="email" className="form-control" name="email" autoComplete="off" value={ email } onChange={ handleInputChange } />
                    </div>

                    <div className="form-group">
                        <label><small className="text-muted" >Password</small></label>
                        <input type="password" className="form-control" name="password" value={ password } onChange={ handleInputChange } />
                    </div>

                    <div className="form-group mt-5">
                        <button className="btn btn-primary form-control">Login</button>
                    </div>

                    <div className="form-group mt-1 text-center pointer">
                        <span onClick={ handleRedirectRegister } ><small className="linkR">Register Here</small></span>
                    </div>

                </form>

            </div>
            
        </div>


    );


};


//////---------------------------------------------->>>>>


export default LoginScreen;

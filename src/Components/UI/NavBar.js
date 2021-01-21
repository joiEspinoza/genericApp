import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../Actions/authActions';

//////<<<<<------------------------------------------------``

const NavBar = () => 
{


    const { userName } = useSelector( state => state.auth )

    const dispatch = useDispatch();

    const handleLogout = () =>
    {
        dispatch( logout() );
    };

///////////////////////////************************////////////////////////


    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <Link to='/' className="navbar-brand">PostMe</Link>
                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>

            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">

                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">

                        <Link to='/' className="nav-link">home</Link>

                    </li>

                </ul>

                <span className="mr-3">■ { userName } ■</span>
                <button onClick={ handleLogout } className="btn btn-primary my-2 my-sm-0">Logout</button>

            </div>

        </nav>

    );

};

//////---------------------------------------------->>>>>

export default NavBar;

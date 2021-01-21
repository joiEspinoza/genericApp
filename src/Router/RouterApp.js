import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import LoginScreen from "../Components/auth/LoginScreen";
import RegisterScreen from "../Components/auth/RegisterScreen";
import HomeScreen from "../Components/dashboard/HomeScreen";
import PublicRoute from '../Router/PublicRoute'
import PrivateRoute from '../Router/PrivateRoute'
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/UI/NavBar";
import { startLoadCategories } from "../Actions/categoryActions";


//////<<<<<------------------------------------------------``


const RouterApp = () => 
{

    const { logged } = useSelector( state => state.auth );


    const dispatch = useDispatch();


    useEffect( () => 
    {

      if( logged )
      {

        dispatch( startLoadCategories() )

      };
      
    }, [ logged, dispatch ] );


///////////////////////////************************////////////////////////

    return (

       
        <Router>
            
                { logged && <NavBar/> }
            
                <Switch>

                    <PublicRoute exact path="/login" component={ LoginScreen } isLoggedIn={ logged } />

                    <PublicRoute exact path="/register" component={ RegisterScreen } isLoggedIn={ logged } />

                    <PrivateRoute exact path="/" component={ HomeScreen } isLoggedIn={ logged } />

                    <Redirect to="/login" />

                </Switch>
    
        </Router>

    )

}

//////---------------------------------------------->>>>>


export default RouterApp;

  
  
  
  

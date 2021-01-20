import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../Components/auth/LoginScreen";
import RegisterScreen from "../Components/auth/RegisterScreen";


//////<<<<<------------------------------------------------``


const RouterApp = () => 
{


    return (


        <Router>
           
                <Switch>

                    <Route exact path="/login" component={ LoginScreen }/>

                    <Route exact path="/register" component={ RegisterScreen } />

                    <Redirect to="/login" />

                </Switch>
    
        </Router>


    )


}

//////---------------------------------------------->>>>>


export default RouterApp;

  
  
  
  

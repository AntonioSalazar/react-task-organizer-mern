import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../Context/Auth/authContext';

const PrivateRoute = ({ component: Component, ...props}) => {


    const authContext = useContext(AuthContext);
    const { authenticated } = authContext;
    return(
        <Route
            {...props} render={ props => !authenticated ? (
                <Redirect to='/'></Redirect>
            ) : (
                <Component {...props}/>
            )}
        ></Route>
    )
}

export default PrivateRoute;
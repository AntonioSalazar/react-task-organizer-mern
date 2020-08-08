import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../Context/Auth/authContext';

const PrivateRoute = ({ component: Component, ...props}) => {

    //auth context
    const authContext = useContext(AuthContext);
    const { authenticatedUser, authenticated, loading } = authContext;

    useEffect(() => {
        authenticatedUser();
    }, [])

    return(
        <Route {...props} render={ props => !authenticated && !loading? 
            (
                <Redirect to='/'/>
            ) : (
                <Component {...props}/>
            )}
        />
    )
}

export default PrivateRoute;
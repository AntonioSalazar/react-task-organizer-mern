import React, { useReducer, Children } from 'react';

//types
import {
    SUCCESSFUL_SIGNUP, 
    UNSUCCESSFUL_SIGNUP, 
    GET_USER, 
    SUCCESSFUL_LOGIN, 
    UNSUCCESSFUL_LOGIN, 
    LOGOUT 
 } from '../../types/index';

//context
import AuthContext from './authContext';
//reducer
import authReducer from './authReducer';

const AuthState = props => {

    //initial state
    const authInitialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }


    //dispatch
    const [ state, dispatch ] = useReducer(authReducer, authInitialState);

    //functions

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,

                
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
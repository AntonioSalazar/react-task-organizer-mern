import React, { useReducer, Children } from 'react';

//axios
import axiosClient from '../../config/axios';

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
    const registerUser = async data => {
        try {
            const response = await axiosClient.post('/api/users', data)
            console.log(response);
            dispatch({
                type: SUCCESSFUL_SIGNUP
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: UNSUCCESSFUL_SIGNUP
            })
        }
    }



    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,

                registerUser,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
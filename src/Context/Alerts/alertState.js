import React, { useReducer } from 'react';

//types
import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../../types/index';

//context
import alertContext from './alertContext';
//reducer
import alertReducer from './alertReducer';

const AlertState = props => {

    const AlertInitialState = {
        alert: null
    }

    //dispatch and state --- takes the reducer and the initial state
    const [ state, dispatch ] = useReducer(alertReducer, AlertInitialState)

    //functions
    const showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg, 
                category
            }
        })
        //the alerts disappears after 5 seconds
        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, 5000)
    }

    return (
        <alertContext.Provider
            value={{
                alert: state.alert,

                showAlert
            }}
        >
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;
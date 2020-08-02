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

    return (
        <alertContext.Provider
            value={{

            }}
        >
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;
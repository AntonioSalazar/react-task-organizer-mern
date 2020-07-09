import React, { useReducer } from 'react';


//Context
import TaskContext from './TaskContext'
//Reducer
import TaskReducer from './TaskReducer'

const TaskState = props => {

    const taskInitialState = {
        tasks: [],
    }

    //Dispatch and state --- takes the reducer and the initial state
    const [ state, dispatch ] = useReducer(TaskReducer, taskInitialState);

    return (
        <TaskContext.Provider

        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;
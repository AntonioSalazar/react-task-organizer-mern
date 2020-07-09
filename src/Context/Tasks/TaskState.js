import React, { useReducer } from 'react';

//Types
import {
    TASKS_PROJECT
} from '../../types/index'


//Context
import TaskContext from './TaskContext'
//Reducer
import TaskReducer from './TaskReducer'

const TaskState = props => {

    const taskInitialState = {
        tasks: [
            { name: 'Meeting 1', state: true, projectId: 1},
            { name: 'Meeting 1', state: true, projectId: 1},
            { name: 'Meeting 2', state: false, projectId: 2},
            { name: 'Meeting 3', state: true, projectId: 3},
            { name: 'Meeting 4', state: true, projectId: 1},
            { name: 'Meeting 5', state: false, projectId: 2},
            { name: 'Meeting 6', state: true, projectId: 3},
            { name: 'Meeting 7', state: true, projectId: 1},
            { name: 'Meeting 8', state: false, projectId: 2},
            { name: 'Meeting 9', state: true, projectId: 3},
        ],
    }

    //Dispatch and state --- takes the reducer and the initial state
    const [ state, dispatch ] = useReducer(TaskReducer, taskInitialState);

    //Functions

    //Tasks for an specific project
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }


    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,

                getTasks
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;
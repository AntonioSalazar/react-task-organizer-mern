import React, { useReducer } from 'react';

//Types
import {
    TASKS_PROJECT,
    ADD_NEW_TASK,
    VALIDATE_TASK_FORM,
    DELETE_TASK
} from '../../types/index'


//Context
import TaskContext from './TaskContext'
//Reducer
import TaskReducer from './TaskReducer'

const TaskState = props => {

    const taskInitialState = {
        tasks: [
            {id: 1, name: 'Meeting 1', state: true, projectId: 1},
            {id: 2, name: 'Meeting 10', state: true, projectId: 1},
            {id: 3, name: 'Meeting 2', state: false, projectId: 2},
            {id: 4, name: 'Meeting 3', state: true, projectId: 3},
            {id: 5, name: 'Meeting 4', state: true, projectId: 1},
            {id: 6, name: 'Meeting 5', state: false, projectId: 2},
            {id: 7, name: 'Meeting 6', state: true, projectId: 3},
            {id: 8, name: 'Meeting 7', state: true, projectId: 1},
            {id: 9, name: 'Meeting 8', state: false, projectId: 2},
            {id: 10, name: 'Meeting 9', state: true, projectId: 3},
        ],
        projectTasks: null,
        errorForm: false
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

    //Function to add new tasks
    const addNewTask = task => {
        dispatch({
            type: ADD_NEW_TASK, 
            payload: task
        })
    }

    //VALIDATE and shows an error in case if necessary
    const validateTask =() => {
        dispatch({
            type: VALIDATE_TASK_FORM
        })
    }

    //DELETE A TASK
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }


    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                errorForm: state.errorForm,

                getTasks,
                addNewTask,
                validateTask,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;
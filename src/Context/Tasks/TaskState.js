import React, { useReducer } from 'react';

//Types
import {
    TASKS_PROJECT,
    ADD_NEW_TASK,
    VALIDATE_TASK_FORM,
    DELETE_TASK,
    TASK_STATE,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_TASK
} from '../../types/index'


//Context
import TaskContext from './TaskContext'
//Reducer
import TaskReducer from './TaskReducer'
//axiosClient
import axiosClient from '../../config/axios'

const TaskState = props => {

    const taskInitialState = {

        projectTasks: [],
        errorForm: false,
        selectedTask : null
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
    const addNewTask =async task => {
        try {
            const result = await axiosClient.post('/api/tasks', task)
            console.log(result);
            dispatch({
                type: ADD_NEW_TASK, 
                payload: task
            })
        } catch (error) {
            console.log(error);
        }
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

    //CHANGES THE STATE OF EACH TASK
    const changeTaskState = task => {
        dispatch({
            type: TASK_STATE,
            payload: task
        })
    }

    //EXTRACTS A TASK FOR US TO EDIT
    const saveCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    //EDIT OR MODIFY A TASK
    const updateSelectedTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    //CLEAN SELECTED TASK
    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK,
        })
    }

    return (
        <TaskContext.Provider
            value={{
                projectTasks: state.projectTasks,
                errorForm: state.errorForm,
                selectedTask: state.selectedTask,

                getTasks,
                addNewTask,
                validateTask,
                deleteTask,
                changeTaskState,
                saveCurrentTask,
                updateSelectedTask,
                cleanTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;
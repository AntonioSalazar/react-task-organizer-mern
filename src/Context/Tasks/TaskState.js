import React, { useReducer } from 'react';

//Types
import {
    TASKS_PROJECT,
    ADD_NEW_TASK,
    VALIDATE_TASK_FORM,
    DELETE_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_TASK
} from '../../types/index'


//Context
import TaskContext from './TaskContext'
//Reducer
import TaskReducer from './TaskReducer'

//axios client
import axiosClient from '../../config/axios';

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
    const getTasks = async project => {
        try {
            const result = await axiosClient.get('../api/tasks', { params: { project } })
            dispatch({
                type: TASKS_PROJECT,
                payload: result.data.tasks
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Function to add new tasks
    const addNewTask = async task => {
        try {
            //eslint-disable-next-line
            const result = await axiosClient.post('/api/tasks', task)
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
    const deleteTask = async (id, project) => {
        await axiosClient.delete(`/api/tasks/${id}`, { params: { project }})
        try {
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }



    //EXTRACTS A TASK FOR US TO EDIT
    const saveCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    //EDIT OR MODIFY A TASK
    const updateSelectedTask = async task => {
        try {
            const result = await axiosClient.put(`api/tasks/${task._id}`, task)
            dispatch({
                type: UPDATE_TASK,
                payload: result.data.task
            })
        } catch (error) {
            console.log(error);
        }
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
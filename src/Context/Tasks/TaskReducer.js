//Types
import {
    TASKS_PROJECT,
    ADD_NEW_TASK,
    VALIDATE_TASK_FORM
} from '../../types/index'
import { findAllByDisplayValue } from '@testing-library/react'


export default(state, action) => {
    switch(action.type){

        case TASKS_PROJECT:
            return{
                ...state,
                projectTasks: state.tasks.filter(task => task.projectId === action.payload)
            }

        case ADD_NEW_TASK:
            return{
                ...state,
                tasks: [...state.tasks, action.payload],
                errorForm: false
            }
        
        case VALIDATE_TASK_FORM:
            return{
                ...state,
                errorForm : true
            }

        default:
            return state
    }
}
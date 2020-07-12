//Types
import {
    TASKS_PROJECT,
    ADD_NEW_TASK,
    VALIDATE_TASK_FORM,
    DELETE_TASK,
    TASK_STATE,
    CURRENT_TASK,
    UPDATE_TASK
} from '../../types/index'



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
                tasks: [ ...state.tasks, action.payload],
                errorForm: false
            }
        
        case VALIDATE_TASK_FORM:
            return{
                ...state,
                errorForm : true
            }

        case DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case UPDATE_TASK:
        case TASK_STATE:
            return{
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id? action.payload :task)
            }

        case CURRENT_TASK:
            return{
                ...state,
                selectedTask: action.payload
            }

        default:
            return state
    }
}
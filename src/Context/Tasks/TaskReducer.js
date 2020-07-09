//Types
import {
    TASKS_PROJECT,
    ADD_NEW_TASK
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
                tasks: [...state.tasks, action.payload]
            }

        default:
            return state
    }
}
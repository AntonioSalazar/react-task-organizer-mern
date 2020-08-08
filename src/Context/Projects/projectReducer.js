import { 
    FORM_NEW_PROJECT, 
    GET_PROJECTS_SIDEBAR, 
    ADD_NEW_PROJECT, 
    VALIDATE_FORM,
    GET_SELECTED_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR
} from '../../types/index'

export default(state, action) => {
    switch(action.type){
        case FORM_NEW_PROJECT:
            return{
                ...state,
                newProjectForm: true
            }

        case GET_PROJECTS_SIDEBAR:
            return {
                ...state,
                projects: action.payload
            }
            
        
        case ADD_NEW_PROJECT:
            return{
                ...state,
                projects: [ ...state.projects, action.payload],
                newProjectForm : false,
                errorForm: false
            }

        case VALIDATE_FORM:
            return{
                ...state,
                errorForm : true
            }
        
        case GET_SELECTED_PROJECT:
            return {
                ...state,
                selectedProject: state.projects.filter(project => project._id === action.payload)
            }
        
        case DELETE_PROJECT:
            return{
                ...state,
                projects: state.projects.filter(project => project._id !== action.payload),
                selectedProject: null
            }

        case PROJECT_ERROR:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
    
}
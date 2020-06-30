import { FORM_NEW_PROJECT, GET_PROJECTS_SIDEBAR, ADD_NEW_PROJECT, VALIDATE_FORM } from '../../types/index'

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
        default:
            return state
    }
    
}
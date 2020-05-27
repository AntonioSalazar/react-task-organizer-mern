import { FORM_NEW_PROJECT, GET_PROJECTS_SIDEBAR } from '../../types/index'

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
            
        default:
            return state
    }
    
}
import { FORM_NEW_PROJECT, GET_PROJECTS_SIDEBAR, ADD_NEW_PROJECT } from '../../types/index'

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
                projects: [ ...state.projects, action.payload]
            }
        default:
            return state
    }
    
}
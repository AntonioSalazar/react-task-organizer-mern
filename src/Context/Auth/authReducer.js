import {
   SUCCESSFUL_SIGNUP, 
   UNSUCCESSFUL_SIGNUP, 
   GET_USER, 
   SUCCESSFUL_LOGIN, 
   UNSUCCESSFUL_LOGIN, 
   LOGOUT 
} from '../../types/index';


export default(state, action) => {




    switch(action.type){

        case SUCCESSFUL_SIGNUP:
            localStorage.setItem("token", action.payload.token);
            return{
                ...state,
                authenticated: true,
                message: null
            }

        case UNSUCCESSFUL_SIGNUP:
            return{
                ...state,
                token: null,
                message: action.payload
            }
        default:
            return state
    }
}
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
        case SUCCESSFUL_LOGIN:
            localStorage.setItem("token", action.payload.token);
            return{
                ...state,
                authenticated: true,
                message: null
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }

        case UNSUCCESSFUL_SIGNUP:
        case UNSUCCESSFUL_LOGIN:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                message: action.payload
            }

        default:
            return state
    }
}
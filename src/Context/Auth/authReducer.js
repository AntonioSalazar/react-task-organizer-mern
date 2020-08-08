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
                message: null,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false
            }

        case UNSUCCESSFUL_SIGNUP:
        case UNSUCCESSFUL_LOGIN:
        case LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                authenticated: null,
                message: action.payload,
                loading: false
            }


        default:
            return state
    }
}
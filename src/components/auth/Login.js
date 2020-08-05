import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../Context/Alerts/alertContext';
import AuthContext from '../../Context/Auth/authContext';

const Login = (props) => {

    
    //extract the values from the context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert} = alertContext;

    //auth context
    const authContext = useContext(AuthContext);
    const { login, message, authenticated } = authContext;

      //when user login, signs up is duplicated
    useEffect(() => {
        if(authenticated){
            props.history.push('/projects')
        }
        if(message){
            showAlert(message.msg, message.category)
        }
    },[message, authenticated, props]);

    const [ userInfo, setUserInfo ] = useState({
        email: "",
        password: ""
    });

    const { email, password } = userInfo;
    //Saving users input into the local state
    const onChangeLogin = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        })
    };

    //funtion trigered when a user submits the form

    const submitForm = e => {
        e.preventDefault();

        //If the user didnt filled a field
        if(email.trim() === '' || password.trim() === ''){
            showAlert('All the fields are required', 'alert-error')
            return
        }

        //send it to the action
        login({email, password})
    }

    return ( 

        <div className="container">
            {
                alert 
                ? (<div className={`alert ${alert.category}`} >{alert.msg}</div>)  
                : null
            }
            <form 
                className='loginForm'
                onSubmit={submitForm}
            >     
                <h2 className='loginForm__title'>Log In</h2>
                <div className="loginForm__fields">
                    <label htmlFor="email">Email</label>
                    <input 
                            type="email"
                            placeholder="email"
                            id='email'
                            name='email'
                            onChange={onChangeLogin}
                            value={email}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                            type="password"
                            placeholder="Password"
                            id='password'
                            name='password'
                            onChange={onChangeLogin}
                            value={password}
                    />
                    <input 
                        type="submit" 
                        value='Login'  
                        className='loginForm__btn'  
                    />
                </div>
            </form>
            <div className='loginForm__signup'>
                <p >
                    Dont have an account? 
                </p>
                <Link to={'/sign-up'} className='loginForm__signup-link'>
                    Sign up &rArr;
                </Link>
            </div>

        </div>
     );
}
 
export default Login;
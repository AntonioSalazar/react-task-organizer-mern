import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [ userInfo, setUserInfo ] = useState({
        email: "",
        password: ""
    });
    const [setError] = useState(false);

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
            setError(true)
            return
        }

        setError(false);
        console.log('form submitted')
    }

    return ( 

        <div className="container">
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
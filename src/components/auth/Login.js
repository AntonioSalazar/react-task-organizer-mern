import React, {useState} from 'react';

const Login = () => {

    const onChangeLogin = () => {

    };

    return ( 

        <div className="container">
            <form className='loginForm'>     
                <h2 className='loginForm__title'>Log In</h2>
                <div className="loginForm__fields">
                    <label htmlFor="email">Email</label>
                    <input 
                            type="email"
                            placeholder="email"
                            id='email'
                            onChange={onChangeLogin}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                            type="password"
                            placeholder="Password"
                            id='password'
                            onChange={onChangeLogin}
                    />
                    <input 
                        type="submit" 
                        value='Login'  
                        className='loginForm__btn'  
                    />
                </div>
            </form>
        </div>
     );
}
 
export default Login;
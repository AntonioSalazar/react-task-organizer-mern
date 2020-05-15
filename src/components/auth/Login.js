import React, {useState} from 'react';

const Login = () => {

    const [ userInfo, setUserInfo ] = useState({
        email: "",
        password: ""
    })

    const { email, password } = userInfo;

    const onChangeLogin = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        })
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
        </div>
     );
}
 
export default Login;
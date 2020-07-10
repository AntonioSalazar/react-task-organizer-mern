import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {

  const [ newUser, setNewUser ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const { username, email, password,passwordConfirm } = newUser;

  const [ setError ] = useState(false);

  //Save user input into local state
  const onChangeSignUp = e => {
    setNewUser({
      ...newUser,
      [e.target.name] : e.target.value
    })
  }

  //When the user clicks on the sign up button

  const onSubmitSignUp = e => {
    e.preventDefault();

    //validate all fields have been filled
    if(username.trim() === '' || email.trim() === '' || password.trim() === '' || passwordConfirm.trim() === ''){
      setError(true);
      return
    }

    setError(false);
  }


    return (
        <div className="container">
          <form 
            className='newAccountForm'
            onSubmit={onSubmitSignUp}
          >
            <h2 className="newAccountForm__title">Sign Up</h2>
            <div className="newAccountForm__fields">
            <label htmlFor="username">User name</label>
              <input 
                    type="text"
                    placeholder="User Name"
                    id='username'
                    name="username"
                    onChange={onChangeSignUp}
              />
              <label htmlFor="email">Email</label>
              <input 
                    type="email"
                    placeholder="email"
                    id='email-signup'
                    name="email"
                    onChange={onChangeSignUp}

              />
              <label htmlFor="password">Password</label>
              <input 
                    type="password"
                    placeholder="Password"
                    id='password-signup'
                    name="password"
                    onChange={onChangeSignUp}
              />
              <label htmlFor="password">Confirm your password</label>
              <input 
                    type="password"
                    placeholder="Please confirm your password"
                    id='password-signup-confirm'
                    name="passwordConfirm"
                    onChange={onChangeSignUp}
              />
              <input 
                    type="submit" 
                    id="signup-btn"
                    className='newAccountForm__btn'
                    value="Sign up"
              />
            </div>
          </form>
          <div className="newAccountForm__login">
            <p>I already have an account 
            <Link to={"/"} className='newAccountForm__login-link'>
               Login &rArr;
            </Link>
            </p>
          </div>
        </div>
      );
}
 
export default NewAccount;
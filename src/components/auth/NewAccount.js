import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../Context/Alerts/alertContext';
import AuthContext from '../../Context/Auth/authContext';

const NewAccount = (props) => {

  //extract the values from the context
  const alertContext = useContext(AlertContext);
  const { alert, showAlert} = alertContext;

  //auth context
  const authContext = useContext(AuthContext);
  const { registerUser, message, authenticated } = authContext;

  //when user login, signs up is duplicated
   useEffect(() => {
      if(authenticated){
        props.history.push('/projects')
      }
   },[message, authenticated, props]);

  const [ newUser, setNewUser ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const { username, email, password,passwordConfirm } = newUser;


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
      showAlert("All the fields are required", "alert-error")
      return
    }

    // Password must be at least 6 characters long
    if(password.length < 6) {
      showAlert("Your password must have at least 6 characters", "alert-error")
      return
    }

    // confirmation password should be the same
    if(password !== passwordConfirm) {
      showAlert("Your password confirmation does not match your password", "alert-error")
      return
    }

    //send to the action
    registerUser({
      username, email, password
    })
  }


    return (
        <div className="container">
          {
            alert 
          ? (<div className={`alert ${alert.category}`} >{alert.msg}</div>)  
                : null
          }
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
                    placeholder="Email"
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
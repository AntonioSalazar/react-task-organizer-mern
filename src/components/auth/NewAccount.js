import React from 'react';

const NewAccount = () => {
    return (
        <div className="container">
          <form 
            className='newAccountForm'
          >
            <h2 className="newAccountForm__title">Sign Up</h2>
            <div className="newAccountForm__fields">
            <label htmlFor="username">User name</label>
              <input 
                    type="text"
                    placeholder="User Name"
                    id='username'
                    name="username"
              />
              <label htmlFor="email">Email</label>
              <input 
                    type="email"
                    placeholder="email"
                    id='email-signup'
                    name="email"
              />
            </div>
          </form>
        </div>
      );
}
 
export default NewAccount;
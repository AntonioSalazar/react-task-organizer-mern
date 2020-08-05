import React, { useContext, useEffect } from 'react';
//auth context
import AuthContext from '../../Context/Auth/authContext';


const Header = () => {

    //get the auth info
    const authContext = useContext(AuthContext);
    const { authenticatedUser, user, logout } =  authContext;

    useEffect(() => {
        authenticatedUser();
    },[]) 
    
    return ( 
        <header className='header'>
          {
            user ? <p className="header__username">Hello <span>{user.username}</span>!</p> : null
          }
          
          <nav className="header__nav">
            <button
              className='btn btn-danger signout'
              onClick={()=> logout()}
            >Sign out</button>
          </nav>
        </header>
     );
}
 
export default Header;
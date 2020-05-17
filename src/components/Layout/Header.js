import React from 'react';

const Header = () => {
    return ( 
        <header className='header'>
          <p className="header__username">Hello <span>Antonio Salazar</span>!</p>

          <nav className="header__nav">
            <a href="#!">Sign Out</a>
          </nav>
        </header>
     );
}
 
export default Header;
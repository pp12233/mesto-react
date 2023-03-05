import React from 'react';
import logo from '../images/Vectorlogo.svg';

function Header() {
  return (
      <div className="header">
        <img
          src={logo}
          className="header__logo"
          alt="логотип"
        />
      </div>
  );
}

export default Header;

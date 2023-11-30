import React from "react";
import logo from '../logo.svg';

function Header() {
  return (
    <header style={{ display: 'flex', marginLeft: '520px' }}>
      <img width='200px' height='200px' alt='reactlogo' src={logo} />
      <h1 style={{ lineHeight: '4.5' }}>React QUIZ</h1>
    </header>
  );
}

export default Header;
import React from 'react';
import logo from '../../images/peep-eats-logo.svg';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-wrapper container'>
        <img src={logo} alt='peep eats' className='logo' />
        <Searchbar />
      </div>
    </nav>
  );
};

export default Navbar;

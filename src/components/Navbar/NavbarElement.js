import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <nav className='navbar navbar-expand-lg'>
      <Link className='navbar-brand' to='#'>
        <h1 className='title'>DD Purcharsing Solutions</h1>
      </Link>

      <div
        className={`${
          isNavCollapsed ? 'collapse navbar-collapse ' : ''
        } justify-content-end`}
      >
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='#'>
              Products
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Testimonials
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link ' to='#'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <button
        className='navbar-toggler'
        type='button'
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
      >
        {isNavCollapsed ? <FaBars /> : <FaTimes />}
      </button>
    </nav>
  );
}

export default Navbar;

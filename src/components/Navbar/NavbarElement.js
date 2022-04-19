import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='nav-brand'>
        <h1 className='title'>DD Purcharsing Solutions</h1>
        {screenWidth <= 767 && (
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>
      <nav>
        {(toggleMenu || screenWidth > 767) && (
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
        )}
      </nav>
    </div>
  );
}

export default Navbar;

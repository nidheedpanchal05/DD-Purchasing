import React from 'react';
import hero from '../../Images/img/hero-img.png';
import client1 from '../../Images/img/clients/client-1.png';
import client2 from '../../Images/img/clients/client-2.png';
import client3 from '../../Images/img/clients/client-3.png';
import client4 from '../../Images/img/clients/client-4.png';
import client5 from '../../Images/img/clients/client-5.png';
import client6 from '../../Images/img/clients/client-6.png';
import About from '../About';
import './Home.css';
import Products from '../Products';
import Testimonials from '../Testimonials';
import CareerHistory from '../CareerHistory';
import Contact from '../Contact';
import Tasks from '../Tasks';
import Acheivement from '../Acheivement';

const clients = [client1, client2, client3, client4, client5, client6];

function home() {
  return (
    <div className='main'>
      <div className='row align-items-center'>
        <div className='col-sm-6 nopadding'>
          <h1 className='main-title'>Grow Your Business with Dhiraj Dewan </h1>
          <button className='button'>See Products</button>
        </div>
        <div className='col-sm-6 nopadding'>
          <img className='hero-image img-fluid' src={hero} alt='Hero' />
        </div>
      </div>
      <div className='clients'>
        {clients.map((logo, index) => {
          return (
            <img
              className='client-logo'
              key={index}
              src={logo}
              alt={`Client` + index}
            />
          );
        })}
      </div>
      <About />
      <Products />
      <Acheivement />
      <CareerHistory />
      <Tasks />
      <Testimonials />
      <Contact />

      <footer className=' footer'>
        <div className='col-sm-6 copyright'>
          <p>
            Copyright <strong>DD Purchasing Solutions</strong>. All Rights
            Reserved
          </p>
          <p>
            Designed by <a href=''>Includ</a>
          </p>
        </div>
        <div className='col-sm-6 '>
          <ul className='nav justify-content-end'>
            <li className='nav-items'>
              <a className='nav-link' href='#'>
                Home
              </a>
            </li>
            <li>
              <a className='nav-link' href='#'>
                About
              </a>
            </li>
            <li>
              <a className='nav-link' href='#'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a className='nav-link' href='#'>
                Terms of use
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default home;

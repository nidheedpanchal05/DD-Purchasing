import React from 'react';
import counts from '../Images/img/counts-img.svg';
import {
  FaRegAddressBook,
  FaRegClock,
  FaRegSmile,
  FaAward,
} from 'react-icons/fa';

function Acheivement() {
  return (
    <div className='acheivements'>
      <img className='col-md-6 img-fluid' src={counts} alt='Counts' />
      <div className='col-md-6 ach-grid'>
        <div className='d-flex flex-row'>
          <span className='acheivements-icon'>
            <FaRegSmile />
          </span>
          <div>
            <h1>65</h1>
            <p>
              <b>Happy Clients</b> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
        <div className='d-flex flex-row'>
          <span className='acheivements-icon'>
            <FaRegClock />
          </span>
          <div>
            <h1>18</h1>
            <p>
              <b>Years of experience</b> Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>
        <div className='d-flex flex-row'>
          <span className='acheivements-icon'>
            <FaRegAddressBook />
          </span>
          <div>
            <h1>85</h1>
            <p>
              <b>Projects</b> Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>
        </div>

        <div className='d-flex flex-row'>
          <span className='acheivements-icon'>
            <FaAward />
          </span>
          <div>
            <h1>15</h1>
            <p>
              <b>Awards</b> Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acheivement;

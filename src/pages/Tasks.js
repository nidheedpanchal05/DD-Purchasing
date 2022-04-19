import React from 'react';
import service1 from '../Images/img/more-services-1.jpg';
import service2 from '../Images/img/more-services-2.jpg';
import service3 from '../Images/img/more-services-3.jpg';
import service4 from '../Images/img/more-services-4.jpg';

function Tasks() {
  return (
    <div className='main'>
      <div className='header'>
        <h1 className='heading'>
          <span>Chief tasks handled</span>
        </h1>
      </div>
      <div className='row tasks'>
        <div className='card'>
          <img src={service1} alt='Service 1' className='card-img' />
          <div className='card-body'>
            <h3 className='card-title'>Sales & Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              exercitationem aliquid aut eum enim ullam ratione necessitatibus
              tempore quo pariatur voluptate tempora molestiae magnam, ipsum
              dolore perferendis expedita maiores facere.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Minus exercitationem aliquid
              aut eum enim ullam ratione necessitatibus tempore quo pariatur
              voluptate tempora molestiae magnam, ipsum dolore perferendis
              expedita maiores facere.
            </p>
          </div>
        </div>
        <div className='card'>
          <img src={service2} alt='Service 2' className='card-img' />
          <div className='card-body'>
            <h3 className='card-title'>Business evelopment</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              exercitationem aliquid aut eum enim ullam ratione necessitatibus
              tempore quo pariatur voluptate tempora molestiae magnam, ipsum
              dolore perferendis expedita maiores facere.
            </p>
          </div>
        </div>
        <div className='card'>
          <img src={service3} alt='Service 3' className='card-img' />
          <div className='card-body'>
            <h3 className='card-title'>Sales Promotion</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              exercitationem aliquid aut eum enim ullam ratione necessitatibus
              tempore quo pariatur voluptate tempora molestiae magnam, ipsum
              dolore perferendis expedita maiores facere.
            </p>
          </div>
        </div>
        <div className='card'>
          <img src={service4} alt='Service 4' className='card-img' />
          <div className='card-body'>
            <h3 className='card-title'>Logistics Management</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              exercitationem aliquid aut eum enim ullam ratione necessitatibus
              tempore quo pariatur voluptate tempora molestiae magnam, ipsum
              dolore perferendis expedita maiores facere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;

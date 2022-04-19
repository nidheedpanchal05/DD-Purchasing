import React from 'react';

function About() {
  return (
    <div className='main about'>
      <div className='header'>
        <h1 className='heading'>
          <span>About Me</span>
        </h1>
      </div>
      <div className='row'>
        <div className='col-sm-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum
          deserunt debitis, mollitia.
          <ul className='about-list'>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>
              Totam dolorem in non aliquid aspernatur voluptate iure enim esse
              expedita!
            </li>
            <li>
              Culpa nulla esse illo laudantium accusamus? Possimus blanditiis
              sunt laudantium dignissimos.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              impedit dolor dolorem
            </li>
          </ul>
        </div>
        <div className='col-sm-6'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            voluptate id eius laboriosam veritatis, minima quisquam quibusdam
            voluptates blanditiis itaque repellat expedita pariatur
            necessitatibus, consectetur consequuntur. Tenetur est libero fuga?
          </p>

          <button className='button'>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;

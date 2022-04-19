import React from 'react';
import { BiFile, BiTachometer, BiWorld, BiBasketball } from 'react-icons/bi';

function CareerHistory() {
  let careers = [
    {
      cIcon: <BiBasketball />,
      role: 'Purchase Head',
      company: 'SSF Plastics Pvt Ltd Pan India',
      startDate: 'May 2015',
      endDate: 'Dec 2020',
    },
    {
      cIcon: <BiFile />,
      role: 'Marketing Manager',
      company: 'Parikh Plast Pvt Ltd',
      startDate: 'May 2012',
      endDate: 'May 2015',
    },
    {
      cIcon: <BiTachometer />,
      role: 'Purchase Manager',
      company: 'SSF Plastics Pvt Ltd',
      startDate: 'Dec 2010',
      endDate: 'Nov 2011',
    },
    {
      cIcon: <BiWorld />,
      role: 'Sales Manager',
      company: 'Jolly containers Ltd, mumbai',
      startDate: 'jun 2003',
      endDate: 'jun 2010',
    },
    {
      cIcon: <BiBasketball />,
      role: 'Distributer - central suburbs',
      company: 'tirupati enterprise & bright plastics',
      startDate: 'Jan 2001',
      endDate: 'may 2003',
    },
    {
      cIcon: <BiFile />,
      role: 'Operations manager',
      company: 'bonhomie plastics pvt ltd (Polycans), mumbai',
      startDate: 'dec 1989',
      endDate: 'Jan 2001',
    },
  ];
  return (
    <div className='main'>
      <div className='header'>
        <h1 className='heading'>
          <span>Career History</span>
        </h1>
        <p>I have 30 years of work experience</p>
      </div>
      <div className='row'>
        {careers.map((career, index) => {
          return (
            <div className='col-md-3 career-card' key={index}>
              <span className='career-icon'>{career.cIcon}</span>
              <span className='card-design'> </span>
              <h3>{career.role}</h3>
              <p>{career.company}</p>
              <p>
                {career.startDate} - {career.endDate}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CareerHistory;

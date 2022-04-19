import React from 'react';
import Slider from 'react-slick';
import testimonial1 from '../Images/img/testimonials/testimonials-1.jpg';
import testimonial2 from '../Images/img/testimonials/testimonials-2.jpg';
import testimonial3 from '../Images/img/testimonials/testimonials-3.jpg';
import testimonial4 from '../Images/img/testimonials/testimonials-4.jpg';
import testimonial5 from '../Images/img/testimonials/testimonials-5.jpg';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const testimonialList = [
  {
    source: testimonial1,
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    message:
      'Something Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    source: testimonial2,
    name: 'XYZ',
    role: 'Founder',
    message:
      'Something Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    source: testimonial3,
    name: 'ABC',
    role: 'Manager',
    message:
      'Something Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    source: testimonial4,
    name: 'PQR',
    role: 'Co-Founder',
    message:
      'Something Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    source: testimonial2,
    name: 'John Larson',
    role: 'Entrepreneur',
    message:
      'Something consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Testimonials() {
  return (
    <div className='testimonial '>
      <div className='header'>
        <h1 className='heading'>
          <span>Testimonials</span>
        </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      </div>
      <div className='carousel slide'>
        <Slider {...settings}>
          {testimonialList.map((data, index) => {
            return (
              <div key={index} className='testimonial-card'>
                <div className='avtar'>
                  <img src={data.source} alt='Test 1' />
                </div>
                <div className='testimonial-body'>
                  <h3> {data.name}</h3>
                  <h4>{data.role}</h4>
                  <i>
                    <RiDoubleQuotesL className='quote' />
                    {data.message}
                    <RiDoubleQuotesR className='quote' />
                  </i>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;

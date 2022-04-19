import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TiLocationOutline } from 'react-icons/ti';
import { RiMailSendLine, RiPhoneLine } from 'react-icons/ri';

function Contact() {
  return (
    <div className='main'>
      <div className='header'>
        <h1 className='heading'>
          {' '}
          <span>Contact</span>{' '}
        </h1>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <h2>DD Plastics Project</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            nisi beatae dignissimos architecto laboriosam autem explicabo ea
            quis ratione excepturi ex illo eos at inventore officiis. Facere
            deleniti modi exercitationem.
          </p>
          <div className='socials'>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaFacebook />
            </button>

            <button>
              <FaInstagram />
            </button>
            <button>
              <FaLinkedin />
            </button>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='contact-details'>
            <span className='contact-icon'>
              <TiLocationOutline />
            </span>
            <p>B-8/302, Veena nagar, LBS Marg, Mulund (W) Mumbai</p>
          </div>
          <div className='contact-details'>
            <span className='contact-icon'>
              <RiMailSendLine />
            </span>
            <a href='mailto:dhirajd11@yahoo.co.in'>dhirajd11@yahoo.co.in</a>
          </div>
          <div className='contact-details'>
            <span className='contact-icon'>
              <RiPhoneLine />
            </span>
            <p>+91 9833551927</p>
          </div>
        </div>
        <div className='col-md-4'>
          <form action='' className='contact-form'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Your Name'
              />
              <input
                type='text'
                className='form-control'
                placeholder='Your Email'
              />
              <input
                type='text'
                className='form-control'
                placeholder='Subject'
              />
              <textarea
                name='message'
                className='form-control'
                id=''
                cols='30'
                rows='3'
                placeholder='Message'
              ></textarea>
              <button className='button'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

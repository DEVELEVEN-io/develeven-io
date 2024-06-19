"use client";

import { useState, useEffect } from 'react';
import { images } from "../../constants";
import Image from 'next/image';
import { Link, Events, scrollSpy } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`} id='navbar'>
      <div className="container flex justify-between mx-auto text-center items-center">
        <div className="navHolder flex py-4">
          <div className='brand-logo flex items-center mr-4'>
            <Image src={images.logo} alt="Logo" width={40} height={40} />
            <span className="ml-2 text-highlight font-bold text-xl">DevEleven-io</span>
          </div>

          <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
            <li className='nav-link px-4 py-2'>
              <Link to="work" activeClass="active" spy={true} smooth={true} offset={-250} duration={500} className="text-txtdark">Work</Link>
            </li>
            <li className='nav-link px-4 py-2'>
              <Link to="services" spy={true} smooth={true} offset={-350} duration={500} className="text-txtdark">Services</Link>
            </li>
            <li className='nav-link px-4 py-2'>
              <Link to="team" spy={true} smooth={true} offset={-250} duration={500} className="text-txtdark">Team</Link>
            </li>
            <li className='nav-link px-4 py-2'>
              <Link to="testimonials" spy={true} smooth={true} offset={50} duration={500} className="text-txtdark">Testimonials</Link>
            </li>
            <li className='nav-link px-4 py-2'>
              <Link to="contact" spy={true} smooth={true} offset={-250} duration={500} className="text-txtdark">Contact</Link>
            </li>
          </ul>
        </div>

        <button className="btn hireBtn btnGradient font-semibold py-2 px-4 rounded-full">
          Hire Us!
        </button>

        <div className='menuBtn hamburger' onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

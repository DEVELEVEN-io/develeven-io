"use client";

import { useState, useEffect } from 'react';
import { images } from "../../constants";
import Image from 'next/image';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { to: 'work', offset: -100, label: 'Work' },
    { to: 'services', offset: -100, label: 'Services' },
    { to: 'team', offset: -100, label: 'Team' },
    { to: 'tech', offset: -100, label: 'Tech' },
    { to: 'contact', offset: -100, label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`} id='navbar'>
      <div className="container flex justify-between mx-auto text-center items-center">
        <div className="navHolder flex py-2">
          <div className='brand-logo flex items-center mr-4'>
            <Image src={images.logo} alt="Logo" width={40} height={40} />
            <span className="ml-2 text-highlight font-bold text-xl">DevEleven-io</span>
          </div>

          <ul className={`nav-list ml-auto ${isOpen ? 'open' : ''}`}>
            {navLinks.map((link, index) => (
              <li key={index} className='nav-link px-0 pt-2 pb-1 text-sm'>
                <Link
                  to={link.to}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  className="text-txtdark"
                  onSetActive={handleLinkClick}
                >
                  {link.label.toUpperCase()}
                </Link>
              </li>
            ))}
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

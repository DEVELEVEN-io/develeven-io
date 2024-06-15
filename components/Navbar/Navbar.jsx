// components/Navbar/Navbar.jsx

import { images } from "../../constants";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='navbar' id='navbar'>
      <div className="container flex justify-between mx-auto text-center items-center">

        <div className="navHolder flex py-4">

        {/* Brand Logo */}
          <div className='brand-logo flex items-center mr-4'>
            <Image src={images.logo} alt="Logo" width={40} height={40}/>
            <span className="ml-2 text-highlight font-bold text-xl">DevEleven-io</span>
          </div>
          
          {/* Navigation Links */}
          <ul className='nav-list flex items-center'>
            {[
              'Work',
              'Services',
              'Team',
              'Testimonials',
              'Contact'
            ].map((item) => (
              <li className='nav-link mx-4' key={`link-${item}`}>
                <a href={`#${item}`} draggable="false" className="text-txtdark">{item}</a>
              </li>
            ))}
          </ul>
          {/* <button className="btn hireBtn bg-gradient-to-r to-cyandark from-cyanmid font-semibold py-2 px-4 rounded-full hover:from-cyandark hover:to-cyanmid">Hire Us!</button> */}
        </div>

        <button className="btn hireBtn">Hire Us!</button>

        {/* Hamburger Menu Button (for mobile) */}
        <div className='menuBtn hamburger'>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

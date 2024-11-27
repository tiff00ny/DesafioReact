import React from 'react';
import Contador from './Contador';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-greens dark:bg-dark-header">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <a className="flex title-font font-medium items-center text-gray-900 dark:text-dark-text">
            <img src="./images/catlogo.png" className="w-20" alt="" />
          </a>
          <nav className="ml-6 text-white font-bold flex space-x-4">
            <a className="hover:text-[#594eff]" href="#">Home</a>
            <a className="hover:text-[#594eff]" href="#adopt">Adopt Now</a>
            <a className="hover:text-[#594eff]" href="#services">Our Services</a>
            <a className="hover:text-[#594eff]" href="#reviews">Reviews</a>
          </nav>
        </div>
        <Contador />
      </div>
    </header>
  );
}

export default Navbar;

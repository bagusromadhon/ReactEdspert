// navbar.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav style={{ backgroundColor: '#152A46' }} className={`p-2 ${showMenu ? 'flex flex-col items-start h-screen' : 'flex items-center justify-between'}`}>
      {/* Logo and My Website */}
      {!showMenu && (
        <div className="flex items-center">
          <span className="text-white text-xl font-semibold ml-2">LOGO</span>
        </div>
      )}

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {showMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
      </div>

      {/* Navigation Items */}
      <ul className={`md:flex md:space-x-4 text-white mt-5 ${showMenu ? 'block' : 'hidden md:block'}`}>
        <li><a href="#" className="hover:text-gray-300">Program</a></li>
        <li><a href="#" className="hover:text-gray-300">Bidang ilmu</a></li>
        <li className="relative group">
          <a href="#" className="nav-link dropdown-toggle" aria-haspopup="true">
            Dropdown
          </a>
          <div className="absolute hidden dropdown-menu group-hover:block bg-gray-200 p-4" aria-label="dropdown" aria-expanded="false">
            <a href="#" className="dropdown-item">Action</a>
            <a href="#" className="dropdown-item">Another action</a>
            <div className="dropdown-divider"></div>
            <a href="#" className="dropdown-item">Something else here</a>
          </div>
        </li>

        <li><a href="#" className="hover:text-gray-300">Tentang edspert</a></li>
        <button style={{ backgroundColor:'#FF6161' }} className={`text-white px-4 py-2 rounded-md`}>
          Masuk/Daftar
        </button>
      </ul>

    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative bg-white shadow-lg">
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Site Name/Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800">
              طوق نجاة
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
            <NavLink to="#about">التعريف</NavLink>
            <NavLink to="#content">المكونات</NavLink>
            <NavLink to="#awareness">التوعية</NavLink>
            <NavLink to="#faq">الأسئلة</NavLink>
            <NavLink to="#story">القصص</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-15 left-0 z-10 bg-white w-full md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="#about" onClick={closeMenu}>التعريف</MobileNavLink>
            <MobileNavLink to="#content" onClick={closeMenu}>المكونات</MobileNavLink>
            <MobileNavLink to="#awareness" onClick={closeMenu}>التوعية</MobileNavLink>
            <MobileNavLink to="#faq" onClick={closeMenu}>الأسئلة</MobileNavLink>
            <MobileNavLink to="#story" onClick={closeMenu}>القصص</MobileNavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable component for desktop nav links (larger font size)
const NavLink = ({ to, children }) => (
  <a
    href={to}
    className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md text-md font-medium transition duration-300"
  >
    {children}
  </a>
);

// Reusable component for mobile nav links (larger font size)
const MobileNavLink = ({ to, children, onClick }) => (
  <a
    href={to}
    onClick={onClick}
    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-md text-md font-medium transition duration-300"
  >
    {children}
  </a>
);

export default Navbar;
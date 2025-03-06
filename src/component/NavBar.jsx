import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="py-4 sticky top-0 z-50 bg-cover bg-center"
      style={{
        backgroundImage: `url(${assets.hero_bg})`,
      }}
    >
      <nav className="flex items-center justify-between mx-4 sm:mx-[10%] ">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={assets.logopng} alt="MosesCare" className="h-8" />
          <span className="ml-2 text-xl font-bold text-[#2D3092]"></span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-700 text-sm lg:text-lg hover:text-[#2D3092] ${
                isActive
                  ? "font-semibold text-[#2D3092] border-b-2 border-b-blue-700"
                  : ""
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              `text-gray-700 text-sm lg:text-lg hover:text-[#2D3092] ${
                isActive
                  ? "font-semibold text-[#2D3092]  border-b-2 border-b-blue-700"
                  : ""
              }`
            }
          >
            ALL DOCTORS
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-700 text-sm lg:text-lg hover:text-[#2D3092] ${
                isActive
                  ? "font-semibold text-[#2D3092]  border-b-2 border-b-blue-700"
                  : ""
              }`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-700 text-sm lg:text-lg hover:text-[#2D3092] ${
                isActive
                  ? "font-semibold text-[#2D3092]  border-b-2 border-b-blue-700"
                  : ""
              }`
            }
          >
            CONTACT
          </NavLink>
        </div>

        {/* Create Account Button */}
        <button className="hidden md:block md:text-sm bg-[#2D3092] text-white px-6 py-2 rounded-full hover:bg-[#252679] transition-colors">
          Create account
        </button>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden z-50" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? assets.cross_icon : assets.menu_icon}
            alt={isMenuOpen ? "Close Menu" : "Open Menu"}
            className="h-6 w-6"
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${
            isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-90 bg-white shadow-lg md:hidden transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6 space-y-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-700 hover:text-[#2D3092] ${
                  isActive ? "font-semibold text-[#2D3092]" : ""
                }`
              }
              onClick={toggleMenu}
            >
              HOME
            </NavLink>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                `text-gray-700 hover:text-[#2D3092] ${
                  isActive ? "font-semibold text-[#2D3092]" : ""
                }`
              }
              onClick={toggleMenu}
            >
              ALL DOCTORS
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-700 hover:text-[#2D3092] ${
                  isActive ? "font-semibold text-[#2D3092]" : ""
                }`
              }
              onClick={toggleMenu}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-700 hover:text-[#2D3092] ${
                  isActive ? "font-semibold text-[#2D3092]" : ""
                }`
              }
              onClick={toggleMenu}
            >
              CONTACT
            </NavLink>
            <button className="bg-[#2D3092] text-white px-6 py-2 rounded-full hover:bg-[#252679] transition-colors">
              Create account
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

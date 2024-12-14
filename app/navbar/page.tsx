// components/Navbar.js
'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 sticky top-0 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Brand</Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div
          className="text-3xl md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <ul
          className={`absolute  top-16 left-0 w-full bg-gray-800 text-center md:static md:flex md:w-auto md:space-x-6 md:items-center md:bg-transparent ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="py-2 md:py-0">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="aboutus" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="career" className="hover:text-gray-400">
              Career
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="services" className="hover:text-gray-400">
              Services
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="support" className="hover:text-gray-400">
              Support
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [nav]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nav && !event.target.closest(".menu-container")) {
        setNav(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [nav]);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0 z-50">
      {/* Logo */}
      <h1 className="text-5xl font-signature ml-2">Tushar Shitole</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-white hover:scale-105 duration-200"
            tabIndex="0"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-400 md:hidden"
        aria-label="Toggle navigation"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {/* Mobile Menu */}
      {nav && (
        <div className="fixed-menu menu-container flex flex-col justify-center items-center">
          <ul className="flex flex-col items-center w-full text-gray-400">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                tabIndex="0"
              >
                <Link
                  onClick={() => setTimeout(() => setNav(false), 300)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

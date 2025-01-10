import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logoAdi2.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const handleNav = () => {
    setNav(!nav);
    if (nav) {
      setShowNavbar(true);
    }
  };

  const handleLinkClick = () => {
    setShowNavbar(false);
    setNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`border-b border-gray-600 bg-[#161616] text-gray-400 h-[100px] w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-full px-4">
        <h1 className="text-3xl font-bold primary-color">
          <a href="/" onClick={handleLinkClick}>
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto transition-transform duration-300 hover:scale-110"
            />
          </a>
        </h1>
        <ul className="hidden md:flex">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item} className="p-5 hover:bg-blue-500 hover:text-white hover:scale-95 rounded-lg px-4 py-2 transition-transform duration-300">
              <a href={`#${item.toLowerCase()}`} onClick={handleLinkClick}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={`${
            nav ? "flex" : "hidden"
          } absolute top-[100px] left-0 w-full bg-black flex-col items-start md:hidden`}
        >
          <ul className="w-full">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <li
                key={item}
                className="p-5 text-xl border-b border-gray-600 w-full hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <a href={`#${item.toLowerCase()}`} onClick={handleLinkClick}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

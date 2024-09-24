import React, { useState } from "react";
import { navLinks } from "..";

const NavItem = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li className="nav-li" key={id}>
          <a className="nav-li_a cursor-pointer" href={href}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevState) => !prevState);
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold hover:text-white transition-colors text-xl"
          >
            Paulo
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 w-6 h-6 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-full h-full relative"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItem />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"} `}>
        <NavItem onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default Navbar;

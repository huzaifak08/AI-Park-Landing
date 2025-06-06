import { useState } from "react";
import { getImageUrl } from "../../utils";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold tracking-wide text-white"
        >
          <img
            src={getImageUrl("logo-white-sm.svg")}
            alt="AI Park Logo"
            className="h-8 w-8 object-contain rounded-xl"
          />
          <span>AI Park</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a href="#features" className="hover:text-gray-300 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 pt-4 pb-6 space-y-4">
          <a href="#features" className="block hover:text-gray-300">
            Features
          </a>
          <a href="#contact" className="block hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

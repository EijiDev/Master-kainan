import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg text-slate-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2 text-2xl font-bold text-slate-700">
              09558545146
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="/"
                  className="transition duration-300 hover:text-slate-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="transition duration-300 hover:text-slate-500"
                >
                  Food Section
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="transition duration-300 hover:text-slate-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 font-semibold text-white transition duration-300 rounded-lg bg-slate-700 hover:bg-slate-800"
            >
              Reserve Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="pb-4 md:hidden">
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="block px-3 py-2 transition rounded hover:bg-gray-800"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/restaurants"
                  className="block px-3 py-2 transition rounded hover:bg-gray-800"
                >
                  Restaurants
                </a>
              </li>
              <li>
                <a
                  href="/reservations"
                  className="block px-3 py-2 transition rounded hover:bg-gray-800"
                >
                  My Reservations
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block px-3 py-2 transition rounded hover:bg-gray-800"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block px-3 py-2 transition rounded hover:bg-gray-800"
                >
                  Contact
                </a>
              </li>
              <li>
                <button className="w-full px-4 py-2 mt-2 font-semibold transition bg-white rounded-lg cursor-pointer text-slate-700 hover:bg-slate-50">
                  Reserve Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;

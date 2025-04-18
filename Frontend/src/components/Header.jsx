import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center px-[8%] py-4 bg-white shadow-2xl">
        <a href="#" className="text-2xl font-bold text-gray-800 no-underline">
          StudentX
        </a>

        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-[70px] left-0 right-0 bg-white md:bg-transparent items-center p-5 md:p-0 shadow-md md:shadow-none`}
        >
          <li className="py-4 md:py-0 md:px-5">
            <a
              href="#"
              className="no-underline text-gray-700 text-lg font-medium hover:text-gray-500 transition-colors"
            >
              Features
            </a>
          </li>
          <li className="py-4 md:py-0 md:px-5">
            <a
              href="#"
              className="no-underline text-gray-700 text-lg font-medium hover:text-gray-500 transition-colors"
            >
              Careers
            </a>
          </li>
          <li className="py-4 md:py-0 md:px-5">
            <a
              href="#"
              className="no-underline text-gray-700 text-lg font-medium hover:text-gray-500 transition-colors"
            >
              Pricing
            </a>
          </li>
          <li className="py-4 md:py-0 md:px-5">
            <a
              href="#"
              className="no-underline text-gray-700 text-lg font-medium hover:text-gray-500 transition-colors"
            >
              About Us
            </a>
          </li>
        </ul>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row w-4/5 md:w-auto mx-auto md:mx-0 gap-2.5 md:gap-4 mt-4 md:mt-0`}
        >
          <Link
            to="/login"
            className="px-6 py-3 rounded-full text-base font-medium cursor-pointer transition-all border border-gray-200 bg-transparent text-gray-700 hover:bg-gray-100"
          >
            Log In
          </Link>
          <Link
            to={"/signup"}
            className="px-6 py-3 rounded-full text-base font-medium cursor-pointer transition-all bg-[#40b3b8] text-white border-none hover:bg-[#35a0a5]"
          >
            Sign Up Free
          </Link>
        </div>

        <div
          className="block md:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </nav>
    </div>
  );
};

export default Header;

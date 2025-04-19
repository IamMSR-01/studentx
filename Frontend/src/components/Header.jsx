import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <nav className="flex justify-between w-full fixed top-0 z-50 backdrop-blur-md items-center py-4 bg-white/10 shadow-2xl border-2 border-white/20 rounded-2xl mt-2 px-30">
        <a href="#" className="text-3xl flex justify-center items-center font-bold text-cyan-400
         no-underline">
          <img 
          className="w-10 h-10 inline-block mr-4 border-2 border-cyan-500 rounded-xl"
          src="StudentX-logo.png" alt="" />
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
              className="no-underline text-cyan-400 text-xl font-semibold hover:text-cyan-500 "
            >
              Features
            </a>
          </li>
          <li className="py-4 md:py-0 md:px-5">
            <a
              href="#"
              className="no-underline text-cyan-400 text-lg font-medium hover:text-cyan-500 transition-colors"
            >
              Careers
            </a>
          </li>
          <li className="py-4 md:py-0 md:px-5">
            <a
              href="#"
              className="no-underline text-cyan-400 text-lg font-medium hover:text-cyan-500 transition-colors"
            >
              Pricing
            </a>
          </li>
          <li className="py-4 md:py-0 md:px-5">
            <a
              href="#"
              className="no-underline text-cyan-400 text-lg font-medium hover:text-cyan-500 transition-colors"
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
            className="px-6 py-1 rounded-2xl text-lg font-semibold cursor-pointer transition-all border-2 border-white/20 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-white hover:border-white"
          >
            Log In
          </Link>
          <Link
            to={"/signup"}
            className="px-8 py-1 flex justify-center items-center rounded-2xl text-base font-medium cursor-pointer transition-all bg-cyan-400 text-white hover:bg-white/10 border-2 border-white/20 hover:text-cyan-400"
          >
            Sign Up
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

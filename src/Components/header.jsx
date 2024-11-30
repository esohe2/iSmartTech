// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <div className="sticky top-0 shadow-lg items-center px-[40px] py-[20px] flex justify-between bg-white lg:px-18 lg:py-4 pb-8">
//       <div>
//         <img
//           className="h-12 w-48 "
//           src="/src\assets\img\Group 2logo.svg"
//           alt=""
//         />
//       </div>
//       <nav className="sm:relative top-[70px] sm:top-0 ">
//         <ul className=" flex gap-[28px] flex-col sm:flex-row ">
//           <Link to="/">
//             <li className="text-primary hover:text-bblue">Home</li>
//           </Link>
//           <Link to="/services">
//             <li className="text-primary hover:text-bblue">Services</li>
//           </Link>
//           <Link to="/about">
//             <li className="text-primary hover:text-bblue">About</li>
//           </Link>
//           <Link to="/contact">
//             <li className="text-primary hover:text-bblue">Contact</li>
//           </Link>
//         </ul>
//       </nav>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 shadow-lg flex items-center px-6 py-4 bg-white z-50">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img
          className="h-10 w-auto"
          src="/src/assets/img/Group 2logo.svg"
          alt="Logo"
        />
      </div>

      {/* Hamburger Icon */}
      <button
        className="sm:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Navigation */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:flex sm:ml-auto sm:items-center absolute sm:relative bg-white sm:bg-transparent w-full sm:w-auto top-[70px] sm:top-0 left-0 shadow-lg sm:shadow-none rounded-b-lg sm:rounded-none z-40 transition-all ease-in-out duration-300`}
      >
        <ul className="flex flex-col sm:flex-row gap-6 sm:gap-8 px-6 py-4 sm:p-0">
          <li>
            <Link
              to="/"
              className="text-primary hover:text-bblue transition-colors duration-200 text-lg font-semibold transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-primary hover:text-bblue transition-colors duration-200 text-lg font-semibold transform hover:scale-105"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-primary hover:text-bblue transition-colors duration-200 text-lg font-semibold transform hover:scale-105"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-primary hover:text-bblue transition-colors duration-200 text-lg font-semibold transform hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

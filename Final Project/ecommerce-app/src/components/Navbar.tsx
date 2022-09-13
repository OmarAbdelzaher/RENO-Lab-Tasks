import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import cart from "../assets/images/icon-cart.svg";
import user from "../assets/images/image-avatar.png";
import '../assets/css/navbar.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const ref: any = useRef();

  return (
    <nav className="bg-white nav-container">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 nav-main">
        <div className="flex items-center justify-between h-16 nav-items-div">
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center ml-7 navbar">
            <div className="flex-shrink-0">
              <img src={logo} alt="sneakers logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="#"
                  className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Collections
                </Link>

                <Link
                  to="#"
                  className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Men
                </Link>

                <Link
                  to="#"
                  className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Women
                </Link>

                <Link
                  to="#"
                  className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>

                <Link
                  to="#"
                  className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div
              className="flex space-x-4 cart-user"
            >
              <img src={cart} alt="cart icon" className="h-5 mt-2 mr-4"/>
              <img src={user} alt="user icon" className="h-9 w-9" />
            </div>
          </div>
        </div>
        <hr className="mt-7"/>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="#"
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
            >
              Collections
            </Link>

            <Link
              to="#"
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
            >
              Men
            </Link>

            <Link
              to="#"
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
            >
              Women
            </Link>

            <Link
              to="#"
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>

            <Link
              to="#"
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </Transition>
    </nav>
  );
}

export default Nav;

"use client";
// import React from "react";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";
import { useState } from "react";

const NAV_LINKS: { name: string; path: string }[] = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/Menu" },
  { name: "Blog", path: "/blog" },
  { name: "Pages", path: "/pages" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/ShopList" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleKeyToggleMenu = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const key = e.key;
    if (key === "Enter" || key === " " || key === "Spacebar") {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <header className="px-6 md:px-16 w-full absolute top-0 z-50 bg-transparent">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-yellow-500">
          <span className="text-white">Food</span>tuck
        </h1>

        {/* Navigation Links */}
        <nav
          aria-label="primary navigation"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } space-x-8 text-white md:flex md:space-x-8 md:text-white`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="relative group hover:text-yellow-500 transition duration-300"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-40 py-2 px-4 bg-transparent border border-yellow-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <FiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-yellow-500 cursor-pointer" />
          </div>

          <Link href="/ShoppingCart">
            <FiShoppingBag className="text-white text-xl cursor-pointer hidden hover:text-yellow-500 md:block" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden ml-auto">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            onKeyDown={handleKeyToggleMenu}
            className="text-white text-2xl cursor-pointer p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile menu"
          onClick={toggleMenu}
          onKeyDown={handleKeyToggleMenu}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 md:hidden"
        >
          <nav
            className="absolute top-0 left-0 w-3/4 bg-white p-8 flex flex-col space-y-4"
            aria-label="mobile navigation"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-black hover:text-yellow-500 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/ShoppingCart"
              onClick={() => setIsMenuOpen(false)}
              className="text-black hover:text-yellow-500 transition duration-300"
            >
              Cart
            </Link>
          </nav>
        </button>
      )}
    </header>
  );
}

'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaSquareXTwitter, FaYoutube } from 'react-icons/fa6';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        // Change this value to adjust when the navbar should appear
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="flex fixed top-0 bg-white shadow-2xl z-10 flex-row justify-between sm:justify-normal w-full p-6">
      {!isMobileMenuOpen && (
        <div className="sm:ml-20">
          <img
            src="safe-movers-logo-1.png"
            className="h-12 w-32 sm:h-auto sm:w-auto"
            alt="Safe Movers Logo"
          />
        </div>
      )}
      <div className="hidden sm:inline-flex ml-64 items-center">
        <NavLink href="/" onClick={closeMobileMenu}>
          Home
        </NavLink>
        <NavLink href="/about-us" onClick={closeMobileMenu}>
          About us
        </NavLink>
        <NavLink href="/services" onClick={closeMobileMenu}>
          Services
        </NavLink>
        <NavLink href="/blog" onClick={closeMobileMenu}>
          Blog
        </NavLink>
        <NavLink href="/safe-movers-shop" onClick={closeMobileMenu}>
          Safe Movers Shop
        </NavLink>
        <Link
          href="/quote-form"
          className=" px-5 py-3 text-white ml-36 rounded-xl bg-[#CC5500] hover:bg-[#00008B] hover:-translate-x-1.5 duration-400 "
        >
          {' '}
          Get a Free Quote{' '}
        </Link>
      </div>
      <div className="sm:hidden">
        {isMobileMenuOpen ? (
          <button
            onClick={toggleMobileMenu}
            className="absolute top-0 right-0 mt-4 mr-4"
          >
            <img src="/close-icon.svg" alt="close menu" className="h-8 w-8" />
          </button>
        ) : (
          <button onClick={toggleMobileMenu}>
            <img src="/burger-menu.svg" alt="burger menu" className="h-8 w-8" />
          </button>
        )}
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-0 right-0 mt-4 mr-4"
          >
            <img src="/close-icon.svg" alt="close menu" className="h-8 w-8" />
          </button>
          <div className="flex flex-col items-center">
            <img
              src="safe-movers-logo-1.png"
              className="h-12 w-32 sm:h-auto sm:w-auto"
              alt="Safe Movers Logo"
            />
            <NavLinkMobile href="/" onClick={closeMobileMenu}>
              Home
            </NavLinkMobile>
            <NavLinkMobile href="/about-us" onClick={closeMobileMenu}>
              About us
            </NavLinkMobile>
            <NavLinkMobile href="/services" onClick={closeMobileMenu}>
              Services
            </NavLinkMobile>
            <NavLinkMobile href="/blog" onClick={closeMobileMenu}>
              Blog
            </NavLinkMobile>
            <NavLinkMobile href="/safe-movers-shop" onClick={closeMobileMenu}>
              Safe Movers Shop
            </NavLinkMobile>
          </div>
          <div className="gap-5 flex flex-col items-center">
            <div className="bg-[#CC5500] w-[250px] h-[1.5px]"></div>
            <div className="flex flex-row gap-x-10">
              <Link href="https://facebook/" target="_blank">
                <FaFacebook
                  size={25}
                  className="text-[#CC5500] hover:-translate-y-1.5 duration-300"
                />
              </Link>
              <Link href="https://facebook/" target="_blank">
                <BsInstagram
                  size={25}
                  className="text-[#CC5500] hover:-translate-y-1.5 duration-300"
                />
              </Link>
              <Link href="https://facebook/" target="_blank">
                <FaSquareXTwitter
                  size={25}
                  className="text-[#CC5500] hover:-translate-y-1.5 duration-300"
                />
              </Link>
              <Link href="https://facebook/" target="_blank">
                <FaYoutube
                  size={25}
                  className="text-[#CC5500] hover:-translate-y-1.5 duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className="ml-3 relative hover:text-[#00008B] hover:border-b-2 hover:border-[#CC5500]"
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
}

function NavLinkMobile({ href, children, onClick }) {
  return (
    <Link href={href} legacyBehavior>
      <a className="block py-2 px-4 hover:text-[#570598]" onClick={onClick}>
        {children}
      </a>
    </Link>
  );
}

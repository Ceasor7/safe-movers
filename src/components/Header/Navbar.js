'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex flex-row justify-between sm:justify-normal w-full p-6">
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
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className="ml-3 relative hover:text-[#570598] hover:border-b-2 hover:border-[#570598]"
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

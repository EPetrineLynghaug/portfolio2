// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Vi bruker en funksjon for å initialisere `isDark` fra localStorage eller OS-preferanse
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    // Fallback: OS dark-mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement; // <html>
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-4 py-3 sticky top-0 z-50 transition-all">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
          MyPortfolio
        </Link>

        {/* Desktop-meny (vises bare på md+) */}
        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Dark‐modus-toggle */}
          <button
            onClick={() => setIsDark(prev => !prev)}
            className="text-xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            title="Toggle theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          {/* Hamburger-ikon for mobil */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden text-2xl text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobil-meny, animert med Framer Motion om ønskelig */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 text-gray-800 dark:text-gray-200 font-medium px-2">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">Home</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">Projects</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

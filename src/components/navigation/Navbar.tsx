import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)


  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement

    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-4 py-3 sticky top-0 z-50 transition-all">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
          MyPortfolio
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            title="Toggle theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          {/* Hamburger icon for mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile menu with Framer Motion animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden mt-3 flex flex-col gap-3 text-gray-800 dark:text-gray-200 font-medium px-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" onClick={closeMenu} className="hover:text-blue-500">Home</Link>
            <Link to="/projects" onClick={closeMenu} className="hover:text-blue-500">Projects</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

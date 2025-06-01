
import React, { useState } from 'react';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';

export interface NavLink {
  to: string;
  label: string;
}

export interface NavbarProps {
  /**
   * Merkevare‐lenke (for eksempel logo eller tekst).
   * Dersom ikke oppgitt, bruker vi en standard.
   */
  brand?: {
    to: string;
    label: string;
  };
  /**
   * Liste over navigasjonslenker.
   * Dersom ikke oppgitt, vises en tom liste.
   */
  links?: NavLink[];
  /**
   * Komponent som brukes for lenker (for eksempel React Router sin <Link>).
   * Props: to, children, onClick?, className?.
   * Hvis denne ikke gis, brukes fallback: <a href="…">.
   */
  LinkComponent?: React.ComponentType<{
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }>;
}

const defaultBrand = { to: '/', label: 'MyPortfolio' };
const defaultLinks: NavLink[] = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
];

const Navbar: React.FC<NavbarProps> = ({
  brand = defaultBrand,
  links = defaultLinks,
  LinkComponent = ({ to, children, onClick, className }) => (
    <a href={to} onClick={onClick} className={className}>
      {children}
    </a>
  ),
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-4 py-3 sticky top-0 z-50 transition-all">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <LinkComponent
          to={brand.to}
          className="text-xl font-bold text-gray-800 dark:text-white"
        >
          {brand.label}
        </LinkComponent>

        {/* Desktop‐meny */}
        <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
          {links.map(({ to, label }) => (
            <LinkComponent key={to} to={to} className="hover:text-blue-500">
              {label}
            </LinkComponent>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Theme‐toggle‐knapp */}
          <button
            type="button"
            onClick={toggle}
            className="text-xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            title="Toggle theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          {/* Hamburger for mobil */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-2xl text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobil‐meny */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-3 text-gray-800 dark:text-gray-200 font-medium px-2">
          {links.map(({ to, label }) => (
            <LinkComponent
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500"
            >
              {label}
            </LinkComponent>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

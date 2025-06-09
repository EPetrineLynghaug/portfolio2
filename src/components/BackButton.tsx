import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();


  if (location.pathname === '/' || location.pathname === '/projects') return null;

  return (
    <>
      {/* Mobile: Positioned on top of hero image */}
      <div className="md:hidden fixed top-20left-4 z-50">
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FaArrowLeft className="text-base" />
        </button>
      </div>

      {/* Desktop: Floating fixed on side */}
      <div className="hidden md:block fixed top-24 left-8 z-50">
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FaArrowLeft className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default BackButton;

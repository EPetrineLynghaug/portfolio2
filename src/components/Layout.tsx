
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navigation/Navbar';
import Footer from './Footer'; 
import BackButton from './BackButton';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-6">
         <div className="mb-6">
    <BackButton />
  </div>
        <Outlet />
      </main>
          <Footer />
    </div>
  );
};

export default Layout;

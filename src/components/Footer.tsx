import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-6 mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-sm">&copy; 2025 Petrine Lynghaug</p>
        <p className="text-sm">
          This is a <span className="italic">rough</span> portfolio. If you want to see my actual website, visit{' '}
          <a
            href="https://petrine.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
          >
            petrine.no
          </a>
        </p>
        <div className="flex justify-center gap-6 pt-2">
          <a
            href="https://github.com/EPetrineLynghaug"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-full transition"
            title="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/elisabeth-petrine-lynghaug-69653229b/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-full transition"
            title="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

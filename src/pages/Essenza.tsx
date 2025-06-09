import React from 'react'
import heroImage from '../assets/img/essenza/essenza.webp'
import picture1 from '../assets/img/essenza/ca-portfolio2(1).png'
import picture2 from '../assets/img/essenza/ca-portfolio2.png'
import LR from '../assets/img/essenza/LR.png'

const Essenza: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 pt-0 max-w-4xl mx-auto" role="main">
      {/* Hero Section */}
      <div className="w-full h-80 md:h-96 lg:h-[32rem] -mt-6 mb-8 overflow-hidden rounded-lg">
        <img
          src={heroImage}
          alt="Screenshot of the Essenza platform as a hero illustration"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Header with title and social links */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 px-4 space-y-4 md:space-y-0">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 text-center md:text-left">
          Essenza – Weekly Assignment
        </h1>
        <nav aria-label="Social links" className="flex space-x-4">
          <a
            href="https://github.com/EPetrineLynghaug/CA-SHOP"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub repository in a new tab"
            className="hover:opacity-80 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-gray-800 dark:text-gray-100"
            >
              <title>GitHub</title>
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.372.81 1.1.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/elisabeth-petrine-lynghaug-69653229b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile in a new tab"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
        </nav>
      </div>

      {/* Project Overview */}
      <section className="mb-12" aria-labelledby="project-overview-heading">
        <h2
          id="project-overview-heading"
          className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Project Overview
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          <span className="font-medium">Weekly Assignment:</span> Essenza is an
          e-commerce site built using a provided API, React, Tailwind CSS, and
          Vite. It features product listings, favorites, a cart system, and UI
          enhancements within a one-week deadline.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          The goal was to explore state management with Zustand and improve
          interaction patterns. I experimented with animated icons and fast cart
          interactions, laying a foundation for scalable e-commerce.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The design uses a calm brown and lime palette paired with purple and
          black accents. <span className="font-semibold">Roboto</span> was
          chosen for its clarity under tight deadlines.
        </p>
        <a
          href="https://essenza-ca.netlify.app/"
          className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium transition-colors"
          aria-label="Visit the live Essenza project"
        >
          Visit Essenza →
        </a>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      {/* Design & Prototyping */}
      <section
        className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between"
        aria-labelledby="design-prototyping-heading"
      >
        <div className="md:w-1/2 md:pr-12">
          <h2
            id="design-prototyping-heading"
            className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100"
          >
            Design & Prototyping
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            The site uses earthy tones softened for comfort, with lime accents
            for vibrancy. Components meet WCAG and adapt responsively.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 w-full h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-lg">
          <img
            src={picture1}
            alt="UI design and prototyping from Essenza"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      {/* Development & Interaction */}
      <section
        className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between"
        aria-labelledby="development-interaction-heading"
      >
        <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mt-6 md:mt-0">
          <h2
            id="development-interaction-heading"
            className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100"
          >
            Development & Interaction
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Used Zustand for state, custom hooks for API and validation. Cart
            and favorites persist on reload.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Animated heart icons signal actions, inline error logs pave way for
            future UI-handled errors.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-12 order-1 md:order-2 w-full h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-lg">
          <img
            src={picture2}
            alt="Essenza development interface"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      {/* Reflection */}
      <section
        className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between"
        aria-labelledby="reflection-heading"
      >
        <div className="md:w-1/2 md:pr-12">
          <h2
            id="reflection-heading"
            className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100"
          >
            Reflection
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            This project allowed me to combine rapid development with real-world
            tooling like Zustand, Vite, and Tailwind. I learned the importance
            of small UX details—such as inline feedback, quick actions, and
            component flexibility.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            With more time, I would improve component isolation, integrate a UI
            error handler, and expand test coverage. Despite the fast
            turnaround, Essenza was a rewarding and educational experience.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 w-full h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-lg">
          <img
            src={LR}
            alt="Essenza reflection graphic"
            className="w-full h-full object-contain"
          />
        </div>
      </section>
    </div>
  )
}

export default Essenza

import React from 'react'
import heroImage from '../assets/img/bidy/Bidy.png'
import profileImage from '../assets/img/bidy/profile.png'
import modalImage from '../assets/img/bidy/modal-search-Bidy.png'
import performanceImage from '../assets/img/bidy/Preformance.png'

const Bidy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 pt-0 max-w-4xl mx-auto" role="main">
      {/* Hero Section */}
      <div className="w-full h-80 md:h-96 lg:h-[32rem] -mt-6 mb-8 overflow-hidden rounded-lg">
        <img
          src={heroImage}
          alt="Screenshot of the Bidy platform as a hero illustration"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 px-4 space-y-4 md:space-y-0">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 text-center md:text-left">
          Bidy – Semester Project
        </h1>
        <nav aria-label="Social links" className="flex space-x-4">
          <a
            href="https://github.com/EPetrineLynghaug/Bidy-Semester-project"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub repository in a new tab"
            className="hover:opacity-80 transition-opacity"
          >
            {/* GitHub SVG */}
            <svg className="w-8 h-8 text-gray-800 dark:text-gray-100" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.372.81 1.1.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/elisabeth-petrine-lynghaug-69653229b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile in a new tab"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
        </nav>
      </div>

      {/* Project Overview */}
      <section className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between" aria-labelledby="project-overview-heading">
        <div className="md:w-1/2 md:pr-12">
          <h2 id="project-overview-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <span className="font-medium">Semester Project, December 2024:</span> Bidy is an auction platform where new users receive <span className="font-semibold">1,000 coins</span> to place bids on available auctions. To earn additional coins, users must create and sell their own auctions. Built with JavaScript, HTML, and Tailwind CSS.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Emphasis on <span className="underline decoration-blue-500">modal development</span>. Use a fictional <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">@stud.noroff.no</code> account to test.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Modern, professional design with primary <span className="font-semibold">Blue</span> actions and <span className="font-semibold">Red</span> for destructive actions for clarity and trust.
          </p>
          <a
            href="https://bidy-semester-project.netlify.app"
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium transition-colors"
            aria-label="Visit the live Bidy project"
          >
            Visit Bidy →
          </a>
        </div>
        <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 w-full h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-lg">
          <img src={profileImage} alt="Profile Figma prototype" className="w-full h-full object-contain" />
        </div>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      {/* Development & Modals */}
      <section className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between" aria-labelledby="development-modals-heading">
        <div className="md:w-1/2 md:pr-12 order-2 md:order-1 mt-6 md:mt-0">
          <h2 id="development-modals-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Development &amp; Modals
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Prototyped with API structure early for stable foundation.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <span className="font-medium">Validation &amp; Error Handling:</span> Regex for login and <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">throw</code> for errors, displayed consistently.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Combined creation/edit modal, handled complexity without last-minute refactoring despite merge conflicts.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-12 order-1 md:order-2 w-full h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-lg">
          <img src={modalImage} alt="New Post modal screenshot" className="w-full h-full object-contain" />
        </div>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      {/* Reflection */}
      <section className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between" aria-labelledby="reflection-heading">
        <div className="md:w-1/2 md:pr-12">
          <h2 id="reflection-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Reflection
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Enhanced skills in modal implementation and error handling; learned to balance depth vs. maintainability under deadlines.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Despite time constraints, delivered a responsive, accessible design and robust functionality.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 w-full h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-lg">
          <img src={performanceImage} alt="Performance stats graphic" className="w-full h-full object-contain" />
        </div>
      </section>
    </div>
  )
}

export default Bidy

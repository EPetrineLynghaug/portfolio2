import React from 'react'
import heroImage from '../assets/img/holidaze/Holidaze-Portfolio.png'
import Dashboardimg from '../assets/img/holidaze/Dashboard.webp'
import Singlepostimg from '../assets/img/holidaze/singlepost.png'
import LR from '../assets/img/holidaze/LR.png'

const Holidaze: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-8 pt-0 max-w-6xl mx-auto" role="main">
      {/* Hero Section */}
      <div className="w-full h-96 lg:h-[32rem] -mt-6 mb-12 overflow-hidden rounded-2xl">
        <img
          src={heroImage}
          alt="Screenshot of the Holidaze platform as a hero illustration"
          className="w-full h-full object-contain rounded-2xl object-center"
        />
      </div>

      {/* Header with title and social links */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 px-4 space-y-4 md:space-y-0">
        <h1 className="text-5xl font-bold text-blue-800 dark:text-blue-300 text-center md:text-left">
          Holidaze – Semester Project
        </h1>
        <nav aria-label="Social links" className="flex space-x-4">
          {/* GitHub */}
          <a
            href="https://github.com/EPetrineLynghaug/Holidaze"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub repository in a new tab"
            className="hover:opacity-80 transition-opacity"
          >
            <svg
              className="w-8 h-8 text-gray-800 dark:text-gray-100"
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.372.81 1.1.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          {/* LinkedIn */}
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
      <section className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between" aria-labelledby="project-overview-heading">
        <div className="md:w-1/2 md:pr-12">
          <h2 id="project-overview-heading" className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Holidaze is a booking platform inspired by Airbnb, allowing both private individuals and commercial providers like hotels to list and rent out accommodations. The site was built using React and JavaScript, with a strong focus on clean design, accessibility, and user experience.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Features include a booking calendar, payment integration, and flexible cancellation options for both users and hosts. The UI is designed to be intuitive and visually appealing with interactive image elements and a clickable hero video.
          </p>
          <a
            href="https://flourishing-brigadeiros-fad739.netlify.app/"
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium transition-colors"
            aria-label="Visit the live Holidaze project"
          >
            Visit Holidaze →
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12 w-full h-96 lg:h-[28rem] overflow-hidden rounded-2xl">
          <img
            src={Dashboardimg}
            alt="Dashboard interface of Holidaze"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-16" />

      {/* Design & Functionality */}
      <section className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between" aria-labelledby="design-heading">
        <div className="md:w-1/2 md:pr-12">
          <h2 id="design-heading" className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Design &amp; Functionality
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I explored a new interactive visual style—each image could be clicked to enhance engagement. A video was used as the hero element and doubled as a navigation link. The design focused on warmth and simplicity, using the Figtree font and a color palette inspired by travel aesthetics.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I also reviewed performance metrics and optimized asset sizes. The hero video was the largest file and had a slight negative impact on mobile performance scores.
          </p>
        </div>
        <div className="rounded-2xl mt-8 md:mt-0 md:w-1/2 md:pl-12 w-full h-96 lg:h-[28rem] overflow-hidden">
          <img
            src={Singlepostimg}
            alt="Single post view of a booking in Holidaze"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-16" />

      {/* Reflection & LR */}
      <section className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between" aria-labelledby="reflection-heading">
        <div className="md:w-1/2 md:pr-12">
          <h2 id="reflection-heading" className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
            Reflection
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Holidaze gave me the opportunity to focus on building a user-friendly and visually pleasing application with real-world relevance. I learned a lot about balancing user interface design with technical performance, and the importance of early testing.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            The bug that occurred just before the deadline was truly unfortunate. It prevented me from showcasing the best version of my work. Without this issue, I’m confident the submitted project would have been even stronger in both functionality and visual execution.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12 w-full flex flex-col space-y-8 overflow-hidden">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={LR}
              alt="LR image showcase"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Holidaze

import React from 'react'
import heroImage from '../assets/img/holidaze/Holidaze-Portfolio.png'
import Dashboardimg from '../assets/img/holidaze/Dashboard.webp'
import Singlepostimg from '../assets/img/holidaze/singlepost.png'

const Holidaze: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 pt-0 max-w-4xl mx-auto" role="main">
      <div className="w-full h-80 md:h-96 lg:h-[32rem] -mt-6 mb-8 overflow-hidden rounded-lg">
        <img
          src={heroImage}
          alt="Screenshot of the Holidaze platform as a hero illustration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300">
          Holidaze – Semester Project
        </h1>
      </div>

      <section className="mb-12" aria-labelledby="project-overview-heading">
        <h2 id="project-overview-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Project Overview
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Holidaze is a booking platform inspired by Airbnb, allowing both private individuals and commercial providers like hotels to list and rent out accommodations. The site was built using React and JavaScript, with a strong focus on clean design, accessibility, and user experience.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Features include a booking calendar, payment integration, and flexible cancellation options for both users and hosts. The UI is designed to be intuitive and visually appealing with interactive image elements and a clickable hero video.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      <section className="mb-12" aria-labelledby="design-heading">
        <div className="w-full h-80 md:h-96 lg:h-[28rem] mb-6 overflow-hidden rounded-lg">
          <img
            src={Dashboardimg}
            alt="Dashboard interface of Holidaze"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 id="design-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Design &amp; Functionality
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          I explored a new interactive visual style—each image could be clicked to enhance engagement. A video was used as the hero element and doubled as a navigation link. The design focused on warmth and simplicity, using the Figtree font and a color palette inspired by travel aesthetics.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I also reviewed performance metrics and optimized asset sizes. The hero video was the largest file and had a slight negative impact on mobile performance scores.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      <section className="mb-12" aria-labelledby="development-heading">
        <div className="w-full h-80 md:h-96 lg:h-[28rem] mb-6 overflow-hidden rounded-lg">
          <img
            src={Singlepostimg}
            alt="Single post view of a booking in Holidaze"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 id="development-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Development &amp; Optimization
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Compared to previous projects, the codebase for Holidaze was more structured and performance-oriented. I worked on optimizing logic and reducing unnecessary complexity. State handling and component reuse were improved across the board.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Unfortunately, a last-minute bug before submission caused the final version to differ from the optimized one I had prepared. This was disappointing, as I believe the original version reflected a significantly more polished and complete product.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      <section className="mb-12" aria-labelledby="reflection-heading">
        <div className="w-full h-80 md:h-96 lg:h-[28rem] mb-6 overflow-hidden rounded-lg">
          <img
            src="https://source.unsplash.com/featured/?reflection,development"
            alt="Reflection graphic for Holidaze"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 id="reflection-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Reflection
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Holidaze gave me the opportunity to focus on building a user-friendly and visually pleasing application with real-world relevance. I learned a lot about balancing user interface design with technical performance, and the importance of early testing.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The bug that occurred just before the deadline was truly unfortunate. It prevented me from showcasing the best version of my work. Without this issue, I’m confident the submitted project would have been even stronger in both functionality and visual execution.
        </p>
      </section>
    </div>
  )
}

export default Holidaze

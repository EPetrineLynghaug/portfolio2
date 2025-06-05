import React from 'react'
import heroImage from '../assets/img/bidy/Bidy.png'
import profileImage from '../assets/img/bidy/profile.png'
import modalImage from '../assets/img/bidy/modal-search-Bidy.png'
import performanceImage from '../assets/img/bidy/Preformance.png'

const Bidy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 pt-0 max-w-4xl mx-auto" role="main">
      <div className="w-full h-80 md:h-96 lg:h-[32rem] -mt-6 mb-8 overflow-hidden rounded-lg">
        <img
          src={heroImage}
          alt="Screenshot of the Bidy platform as a hero illustration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300">
          Bidy – Semester Project
        </h1>
        <nav aria-label="Social links" className="flex space-x-4">
          <a
            href="https://github.com/USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile in a new tab"
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
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8
                       8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04
                       -3.338.725-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633
                       17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84
                       1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762
                       -1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235
                       -3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23
                       .96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552
                       3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23
                       1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.372.81 1.1.81
                       2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565
                       22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/USERNAME"
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

      <section className="mb-12" aria-labelledby="project-overview-heading">
        <h2 id="project-overview-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Project Overview
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          <span className="font-medium">Semester Project, December 2024:</span> Bidy is an auction platform where new users receive <span className="font-semibold">1,000 coins</span> to place bids on available auctions. To earn additional coins, users must create and sell their own auctions. The project is built with JavaScript, HTML, and Tailwind CSS.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          In previous projects, the focus was often on learning new concepts. For this assignment, I placed special emphasis on <span className="underline decoration-blue-500">modal development</span>. You only need a <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">@stud.noroff.no</code> account to test the site—it can be fictional.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The visual design aims for a modern and professional look, featuring a carefully chosen color palette. <span className="font-semibold">Blue</span> is used for primary actions, while <span className="font-semibold">Red</span> indicates cancellations or destructive actions. These choices help create a balanced, interactive, and trustworthy user experience.
        </p>
        <a
          href="#"
          className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium transition-colors"
          aria-label="Visit the live Bidy project"
        >
          Visit Bidy →
        </a>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      <section className="mb-12" aria-labelledby="design-prototyping-heading">
        <div className="w-full h-80 md:h-96 lg:h-[28rem] mb-6 overflow-hidden rounded-lg">
          <img
            src={profileImage}
            alt="Figma prototype showing the profile modal and overall design layout"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 id="design-prototyping-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Design &amp; Prototyping
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          I created a dedicated stylesheet and a mid-fidelity prototype in Figma. My design closely matched the final implementation, with a few natural changes along the way.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          The overall theme appeals to the target audience with a contemporary style, meets WCAG accessibility standards, and is arranged in a responsive layout. Even smaller elements, like icons, were highlighted to improve usability.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          <span className="italic text-gray-600 dark:text-gray-500">Note:</span> The modals—which were a major focus—weren’t fully fleshed out in Figma, as I was unsure how best to represent them visually at that stage.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      <section className="mb-12" aria-labelledby="development-modals-heading">
        <div className="w-full h-80 md:h-96 lg:h-[28rem] mb-6 overflow-hidden rounded-lg">
          <img
            src={modalImage}
            alt="Screenshot of the 'New Post' modal in action"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 id="development-modals-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Development &amp; Modals
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          I spent significant time prototyping based on the API structure. This approach let me test endpoints early and created a solid foundation for further implementation. My prototypes often became more detailed than strictly necessary, but they helped set the stage for the rest of the work.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          <span className="font-medium">Validation &amp; Error Handling:</span> I used regex for user login validation and implemented <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">throw</code> statements for errors. This setup captures and displays both API and custom validation messages in a dedicated UI section, ensuring clarity and consistency when handling login and form errors.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          A major focus was making the “New Post” modal dynamic—validating inputs and showing clear error messages. The same modal handles both creating new auctions and editing existing posts, which presented challenges in making everything work seamlessly together.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The modal component became larger than I initially expected, but I avoided last-minute refactoring to reduce the risk of introducing new bugs before the deadline. Additionally, a GitHub merge conflict caused some lost progress, forcing me to tackle unexpected challenges—especially around modal functionality.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      <section className="mb-12" aria-labelledby="reflection-heading">
        <div className="w-full h-80 md:h-96 lg:h-[28rem] mb-6 overflow-hidden rounded-lg">
          <img
            src={performanceImage}
            alt="Graphic showing performance statistics for Bidy"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 id="reflection-heading" className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Reflection
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          This project gave me the opportunity to deepen my understanding of modal development and robust error handling. I experimented with throwing errors to provide immediate user feedback while keeping error nesting to one level for clarity.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Despite some compromises due to time constraints—such as a longer modal component—this project was a highly valuable learning experience. It reinforced the importance of accessible design, efficient error handling, and finding the right balance between innovation and practical limitations under tight deadlines.
        </p>
      </section>
    </div>
  )
}

export default Bidy

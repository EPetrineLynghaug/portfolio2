// src/pages/Bidy.tsx
import React from 'react';

const Bidy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 max-w-4xl mx-auto">
      {/* Social Links (GitHub & LinkedIn) */}
      <div className="flex justify-end space-x-4 mb-4">
        <a
          href="https://github.com/USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-800 dark:text-blue-300">
        Bidy – Semester Project
      </h1>

      {/* Project Overview */}
      <section className="mb-12">
        {/* Placeholder Image */}
        <img
          src="https://via.placeholder.com/800x400?text=Project+Overview"
          alt="Project Overview Placeholder"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Project Overview
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          <span className="font-medium">Semester Project, December 2024:</span> An auction platform
          where new users receive <span className="font-semibold">1,000 coins</span> to place bids on
          available auctions. To earn additional coins, users must create and sell their own auctions.
          This project was built with JavaScript, HTML, and Tailwind CSS.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          In previous projects, I focused on learning new concepts, but for this project, I chose to
          emphasize <span className="underline decoration-blue-500">modal development</span>. To test
          the site, you only need an <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
          @stud.noroff.no
          </code>{' '}
          user account, which can be fictional.
        </p>
        <a
          href="#"
          className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium transition-colors"
        >
          Visit Bidy →
        </a>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      {/* Design & Prototyping */}
      <section className="mb-12">
        {/* Placeholder Image */}
        <img
          src="https://via.placeholder.com/800x400?text=Design+%26+Prototyping"
          alt="Design & Prototyping Placeholder"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Design & Prototyping
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          The color palette was chosen for a modern and professional look.{' '}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">Blue</span> highlights
          primary actions, while <span className="text-red-600 dark:text-red-400 font-semibold">
          Red
          </span>{' '}
          is reserved for cancellations. These colors ensure balance, interaction, and reliability.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          As part of the project requirements, I created a stylesheet and a mid-level prototype in
          Figma. My prototype closely mirrored the final implementation, though some natural changes
          occurred along the way.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          The overall theme appeals to the target audience with a modern style, adheres to WCAG
          standards for accessibility, and arranges content in a responsive layout. Small elements
          like icons were made prominent to enhance usability.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          <span className="italic text-gray-600 dark:text-gray-500">Note:</span> The modals, a major
          focus in this project, were not fully designed in Figma as I was uncertain how to
          represent them visually at the time.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      {/* Font Choice */}
      <section className="mb-12">
        {/* Placeholder Image */}
        <img
          src="https://via.placeholder.com/800x400?text=Font+Choice"
          alt="Font Choice Placeholder"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Font Choice
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          For this project, I chose one of my favorite fonts, <span className="font-medium">
          Satoshi, Sans Serif
          </span>, due to its neat, readable, and modern appearance. It provides clean and balanced
          lines, making it easy to read even at smaller sizes. What I love about this font is how it
          combines simplicity, functionality, and aesthetics—it doesn’t steal the spotlight but is
          unique enough to give the site its own character. This is a font I use often in my
          projects.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      {/* Buttons */}
      <section className="mb-12">
        {/* Placeholder Image */}
        <img
          src="https://via.placeholder.com/800x400?text=Buttons"
          alt="Buttons Placeholder"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Buttons
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The buttons I designed are simple yet clear. I used a darker hover effect to make it obvious
          what action the user is about to take. Personally, I prefer buttons with slightly rounded
          corners that are both clear and functional, ensuring consistency throughout the site.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      {/* Development */}
      <section className="mb-12">
        {/* Placeholder Image */}
        <img
          src="https://via.placeholder.com/800x400?text=Development"
          alt="Development Placeholder"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Development
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          I spent significant time prototyping based on the API structure. When prototyping, I aim to
          make the design phase more efficient by not only testing endpoints but also creating a
          basic structure for further implementation. I find this method effective, even though the
          prototype tends to be more detailed than recommended.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          <span className="font-medium">Validation & Error Handling:</span> Regex was used for user
          login validation, alongside a <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
          throw
          </code>{' '}
          statement for errors. This setup captures and displays messages from both the API and
          custom validations. Errors are displayed in a dedicated UI section, maintaining clarity and
          design consistency for login and form issues.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      {/* Focus on Modals */}
      <section className="mb-12">
        {/* Placeholder Image */}
        <img
          src="https://via.placeholder.com/800x400?text=Focus+on+Modals"
          alt="Focus on Modals Placeholder"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Focus on Modals
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          A significant amount of time was spent ensuring the “New Post” modal was dynamic while
          also validating inputs with error messages. The modal for creating new auctions is the
          same modal used for editing existing posts, which posed challenges in ensuring everything
          worked seamlessly together.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          The modal file itself ended up being longer than ideal, but I didn’t take the risk of
          refactoring it at the very end to avoid introducing new bugs right before the deadline.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700 mb-12" />

      {/* Reflection */}
      <section className="mb-12">
        {/* Placeholder Image */}
        <img
          src="https://via.placeholder.com/800x400?text=Reflection"
          alt="Reflection Placeholder"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Development Choices & Reflection
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          This assignment allowed me to deepen my understanding of modal development and error
          handling. I experimented with throwing errors to provide user feedback, keeping error
          nesting to a single level for clarity. A GitHub merge conflict led to some lost progress,
          forcing me to tackle unexpected challenges—particularly regarding modal functionality.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Despite some compromises due to time constraints, such as a longer modal file, this
          project was a valuable learning experience. It reinforced the importance of accessible
          design, efficient error handling, and balancing innovation with practical constraints
          under deadlines.
        </p>
      </section>
    </div>
  );
};

export default Bidy;

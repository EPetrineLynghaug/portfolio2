import React from 'react'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

const Contact: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6">
        Contact Me
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Feel free to reach out for collaborations, questions, or just to say hi!
      </p>

      <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
        <li className="flex items-center gap-3">
          <FiMail className="text-xl text-blue-600 dark:text-blue-400" />
          <a
            href="mailto:petrinelynghaug@gmail.com"
            className="hover:underline"
          >
            petrinelynghaug@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-3">
          <FiGithub className="text-xl text-blue-600 dark:text-blue-400" />
          <a
            href="https://github.com/USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub Profile
          </a>
        </li>
        <li className="flex items-center gap-3">
          <FiLinkedin className="text-xl text-blue-600 dark:text-blue-400" />
          <a
            href="https://linkedin.com/in/USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </li>
      </ul>
    </main>
  )
}

export default Contact

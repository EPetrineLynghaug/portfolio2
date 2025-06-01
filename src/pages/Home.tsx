import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'; 

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Holidaze',
    description: 'A holiday booking platform with destination overviews and user reviews.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Holidaze',
  },
  {
    id: 2,
    title: 'Ecom',
    description: 'An e-commerce dashboard for managing products and orders efficiently.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Ecom',
  },
  {
    id: 3,
    title: 'Bidy',
    description: 'A real-time bidding platform for auctions with live updates.',
    imageUrl: 'https://via.placeholder.com/300x200?text=Bidy',
  },
];

const Home: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Hero-seksjonen ligger øverst */}
      <Hero />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-2xl shadow p-4 hover:shadow-lg transition flex flex-col"
            >
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">
                {project.description}
              </p>
              <Link
                to={`/project/${project.id}`}
                className="mt-4 inline-block px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white dark:text-gray-200 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors text-center"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

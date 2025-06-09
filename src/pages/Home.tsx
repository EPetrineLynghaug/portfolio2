import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import LinkedInEmbed from '../components/LinkedInEmbed';
import bidyImage from '../assets/img/bidy/Bidy.png';
import essenzaImage from '../assets/img/essenza/essenza.webp';
import holidazeImage from '../assets/img/holidaze/Holidaze-Portfolio.png';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  { id: 1, title: 'Holidaze', description: 'A holiday booking platform with destination overviews and user reviews.', imageUrl: holidazeImage },
  { id: 2, title: 'Ecom', description: 'An e-commerce dashboard for managing products and orders efficiently.', imageUrl: essenzaImage },
  { id: 3, title: 'Bidy', description: 'A real-time bidding platform for auctions with live updates.', imageUrl: bidyImage },
];

const linkedInPosts = [
  { id: 1, embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7337807162695430145' },
  { id: 2, embedSrc: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7336289805518929921' },
];

const Home: React.FC = () => {
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedPostId(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Hero />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-12 text-left">
       2025 School Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <article
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 h-full"
            >
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
                  {project.title}
                </h2>
                <p className="flex-1 text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block mt-auto px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-lg font-medium text-center transition duration-200"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <section className="py-20 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-left text-blue-700 dark:text-blue-300 mb-12">
          Latest from LinkedIn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {linkedInPosts.map(post => (
            <article
              key={post.id}
              className="rounded-xl shadow-md p-6 flex flex-col h-full"
            >
              <LinkedInEmbed
                embedSrc={post.embedSrc}
                previewHeight={300}
                expandedHeight={800}
                expanded={expandedPostId === post.id}
                onToggle={() => toggleExpand(post.id)}
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

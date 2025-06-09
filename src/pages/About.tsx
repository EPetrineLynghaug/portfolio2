import React from 'react';
import Heroimg from '../assets/img/about/suz.jpg';
import { FaJs, FaReact, FaAngular, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiRust, SiFigma } from 'react-icons/si';

const About: React.FC = () => {
  const skills = [
    { Icon: FaHtml5, name: 'HTML5', color: 'bg-orange-500', percent: 99 },
    { Icon: FaCss3Alt, name: 'CSS3', color: 'bg-blue-500', percent: 99 },
    { Icon: SiFigma, name: 'Figma', color: 'bg-pink-400', percent: 99 },
    { Icon: FaJs, name: 'JavaScript', color: 'bg-yellow-400', percent: 99 },
    { Icon: SiTailwindcss, name: 'Tailwind CSS', color: 'bg-teal-400', percent: 89 },
    { Icon: FaReact, name: 'React', color: 'bg-blue-400', percent: 89 },
     { Icon: FaAngular, name: 'Angular', color: 'bg-red-600', percent: 70 },
    { Icon: SiTypescript, name: 'TypeScript', color: 'bg-blue-600', percent: 20 },
    { Icon: SiRust, name: 'Rust', color: 'bg-red-700', percent: 20 },

  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Text section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6">
            About Me
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I'm Petrine, a passionate developer from Bergen who loves crafting clean and functional digital solutions. My journey in IT has been driven by curiosity, creativity, and a desire to continually grow. With a focus on user-friendly designs and efficient coding practices, I aim to deliver seamless experiences for every project I undertake.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            When I'm not coding, I enjoy climbing, dog sports, exploring the outdoors, and spending time with family. As a volunteer for the Red Cross, I'm currently training in search and rescue operations, further fueling my passion for teamwork and problem-solving.
          </p>
        </div>

        {/* Image section */}
        <div className="md:w-1/2 w-full h-80 md:h-72 lg:h-96 overflow-hidden rounded-2xl mt-8 md:mt-0">
          <img
            src={Heroimg}
            alt="Petrine in action"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Tech Stack Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-8 mt-25 ">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map(({ Icon, name, color, percent }) => (
            <div key={name} className="flex flex-col items-center">
              <Icon className="text-5xl mb-2" />
              <span className="font-medium mb-2">{name}</span>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  className={`${color} h-full rounded-full`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;

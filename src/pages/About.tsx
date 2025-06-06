import React from 'react'

const About: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <div className="w-full h-80 md:h-96 lg:h-[28rem] mb-8 overflow-hidden rounded-lg">
        <img
          src="https://via.placeholder.com/1200x800?text=About+Me"
          alt="Petrine in action - placeholder"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6">
        About Me
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        I'm Petrine, a passionate developer from Bergen who loves crafting clean and functional digital solutions. My journey in IT has been driven by curiosity, creativity, and a desire to continually grow. With a focus on user-friendly designs and efficient coding practices, I aim to deliver seamless experiences for every project I undertake.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        When I'm not coding, I enjoy climbing, dog sports, exploring the outdoors, and spending time with family. As a volunteer for the Red Cross, I'm currently training in search and rescue operations, further fueling my passion for teamwork and problem-solving.
      </p>
    </main>
  )
}

export default About

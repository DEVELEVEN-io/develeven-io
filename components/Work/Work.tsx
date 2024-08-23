"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { images } from '../../data/';

const Work = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'DevEleven-io',
      category: 'frontend',
      image: images.project_1,
      liveDemo: 'https://develeven-io.vercel.app/',
      code: 'https://github.com/DEVELEVEN-io/develeven-io'
    },
    {
      id: 2,
      title: 'Web Design',
      category: 'frontend',
      image: images.project_2,
      liveDemo: 'null',
      code: 'code'
    },
    {
      id: 3,
      title: 'Weather App',
      category: 'backend',
      image: images.project_3,
      liveDemo: 'https://weather-app-abidalwassie.vercel.app',
      code: 'https://github.com/AbidAlWassie/weather-app'
    },
    {
      id: 4,
      title: 'Forest Knight',
      category: 'others',
      image: images.project_4,
      liveDemo: 'https://onemandev-io.itch.io/',
      code: 'https://github.com/AbidAlWassie/Forest-Knight'
    },
    {
      id: 5,
      title: 'Tilemap Editor',
      category: 'others',
      image: images.project_1,
      liveDemo: 'https://onemandev-io.github.io/tilemap-editor/',
      code: 'https://github.com/oneManDev-io/tilemap-editor'
    }
  ];

  const filteredProjects = projects.filter(project => filter === 'all' || project.category === filter);

  return (
    <section className="work-section py-16 bg-gray-100" id="work">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Work</h3>
          <h1 className="text-4xl font-bold text-gray-800">Latest Projects</h1>
        </div>

        <div className="flex justify-center mb-8">
          <div className="filter-btns flex space-x-4">
            <button
              className={`filter-btn px-4 py-2 rounded-lg ${filter === 'all' ? 'active' : 'inactive'} transition duration-300`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`filter-btn px-4 py-2 rounded-lg ${filter === 'frontend' ? 'active' : 'inactive'} transition duration-300`}
              onClick={() => setFilter('frontend')}
            >
              Front end
            </button>
            <button
              className={`filter-btn px-4 py-2 rounded-lg ${filter === 'backend' ? 'active' : 'inactive'} transition duration-300`}
              onClick={() => setFilter('backend')}
            >
              Back end
            </button>
            <button
              className={`filter-btn px-4 py-2 rounded-lg ${filter === 'others' ? 'active' : 'inactive'} transition duration-300`}
              onClick={() => setFilter('others')}
            >
              Others
            </button>
          </div>
        </div>

        <div className="portfolio-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="prt-card bg-white rounded-lg shadow-lg overflow-hidden"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="prt-image bg-bglight mx-4 pt-4 pb-0 px-4 rounded-lg relative">
                  <div className="gallery-item">
                    <Image src={project.image} alt={project.title} className="object-cover" />
                  </div>

                  {/* <div className="prt-overlay absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <a href={project.liveDemo} target="_blank" className="prt-icon text-white mx-2">
                      <AiFillEye size={24} />
                    </a>
                    <a href={project.code} target="_blank" className="prt-icon text-white mx-2">
                      <AiFillGithub size={24} />
                    </a>
                  </div> */}

                </div>
                <div className="prt-desc p-4">
                  {/* <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <a href={project.liveDemo} target="_blank" className="btn secondary-btn sm bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                    Live Demo
                  </a> */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Work;

"use client";

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Cards from '../../components/Cards';
import FilterButtons from '../../components/FilterButtons';
import { images } from "../../data";

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
        <div className="mb-4 text-center">
          <h2 className="text-4xl font-bold my-4 textGradient2">Our Top Projects</h2>
        </div>

        {/* Filter Buttons */}
        <FilterButtons filter={filter} setFilter={setFilter} />

        {/* Projects Grid */}
        <div className="portfolio-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Cards key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Work;

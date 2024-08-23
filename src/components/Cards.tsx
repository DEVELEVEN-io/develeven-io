import { motion } from 'framer-motion';
import Image from 'next/image';

const Cards = ({ project }) => {
  return (
    <motion.div
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
      </div>
      <div className="prt-desc p-4">
                    {/* <div className="prt-overlay absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <a href={project.liveDemo} target="_blank" className="prt-icon text-white mx-2">
                <AiFillEye size={24} />
              </a>
              <a href={project.code} target="_blank" className="prt-icon text-white mx-2">
                <AiFillGithub size={24} />
              </a>
            </div> */}
          {/* <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
          <a href={project.liveDemo} target="_blank" className="btn secondary-btn sm bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Live Demo
          </a> */}
      </div>
    </motion.div>
  );
};

export default Cards;

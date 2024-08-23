import { motion } from 'framer-motion';
import { useState } from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  const buttons = [
    { label: 'All', value: 'all' },
    { label: 'Front end', value: 'frontend' },
    { label: 'Back end', value: 'backend' },
    { label: 'Others', value: 'others' },
  ];

  const [activeIndex, setActiveIndex] = useState(buttons.findIndex(button => button.value === filter));

  const handleClick = (value, index) => {
    setFilter(value);
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="filter-btns flex space-x-4 relative">
        {buttons.map((button, index) => (

          <div key={button.value}>
          <motion.div
            className="absolute z-[-10] top-[0px]"
            initial={{ x: 0 }}
            animate={{
              x:
                index < activeIndex
                  ? 100
                  : index > activeIndex
                  ? -100
                  : 0,
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            style={{ position: 'relative' }}
          >
            <button
              className={`filter-btn absolute text-tran px-4 py-2 rounded-lg ${filter === button.value ? 'active' : 'inactive'} transition duration-300`}
            >
              {button.label}
            </button>
            </motion.div>
            <button
              className={`filter-btn px-4 py-2 rounded-lg z-[20] ${filter === button.value ? '' : 'inactive'} transition duration-300`}
              onClick={() => handleClick(button.value, index)}
            >{button.label}</button>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default FilterButtons;

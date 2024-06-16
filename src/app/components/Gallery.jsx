import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Importing next/image for optimized image rendering

const Gallery = ({ gallery }) => {
  // Check if gallery or gallery.src is undefined
  if (!gallery || !gallery.src) {
    return null; // or handle the case appropriately
  }

  return (
  <div className="bg-cyandark2 mx-4 pt-4 pb-0 px-4 rounded-lg">
    <motion.div layout className="gallery-item">
      

      <Image
        src={gallery.src}
        alt={`Gallery item ${gallery.id}`}
        width={400}
        height={300}
        />

    </motion.div>
  </div>
  );
};

export default Gallery;

import React from "react";
import Image from "next/image"; // Importing next/image for optimized image rendering

const Gallery = ({ gallery }) => {
  // Check if gallery or gallery.src is undefined
  if (!gallery || !gallery.src) {
    return null; // or handle the case appropriately
  }

  return (
    <div className="bg-bglight mx-4 pt-4 pb-0 px-4 rounded-lg">
      <div className="gallery-item">
        <Image
          src={gallery.src}
          alt={`Gallery item ${gallery.id}`}
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default Gallery;

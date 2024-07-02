import React from "react";
import Image from "next/image";

const Gallery = ({ gallery }) => {
  if (!gallery || !gallery.src) {
    return null;
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

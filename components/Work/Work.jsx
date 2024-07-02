"use client";

import Gallery from "@/app/components/Gallery";
import Filter from "@/app/components/Filter";
import { useState, useEffect } from "react";
import gallery from "../../constants/gallery";

const Work = () => {
  const [filtered, setFiltered] = useState(gallery);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFiltered(gallery);
    } else {
      setFiltered(gallery.filter((item) => item.category === category));
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.galleryHide').forEach(item => {
        item.classList.add('hidden');
      });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [activeCategory, filtered]);


  return (
    <section id="work" className="work container flex flex-col justify-between mx-auto mt-14 w-full text-center">
      <h2 className="text-4xl font-bold my-4 textGradient2">Our Top Projects</h2>

      <div className="row flex flex-col">
        <Filter
          activeCategory={activeCategory}
          setActiveCategory={handleFilter}
          data={gallery}
          setFiltered={setFiltered}
        />

        <div className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((item) => (
            <div
              key={item.id}
              className={`gallery-item ${item.category !== activeCategory && activeCategory !== "all" ? "galleryHide" : ""}`}
            >
              <Gallery gallery={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
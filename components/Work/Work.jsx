"use client";

import Gallery from "@/app/components/Gallery";
import Filter from "@/app/components/Filter";
import { useState, useEffect } from "react";
import gallery from "../../constants/gallery";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [filtered, setFiltered] = useState(gallery);
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="work" className="container flex flex-col justify-between mx-auto mt-14 w-full text-center">
      <h2 className="text-4xl font-bold my-4 textGradient2">Our Top Projects</h2>

      <div className="row flex flex-col">
        <Filter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          data={gallery}
          setFiltered={setFiltered}
        />

        <motion.div layout className="gallery">
        <AnimatePresence>
          {filtered.map((gallery) => {
            return <Gallery gallery={gallery} key={gallery.id} />;
          })}
        </AnimatePresence>
          </motion.div>
        <Gallery images={filtered} />
      </div>
    </section>
  );
};

export default Work;
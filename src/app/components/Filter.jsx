import React, { useEffect } from "react";

const Filter = ({ setActiveCategory, activeCategory, setFiltered, data }) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(data);
      return;
    }
    const filtered = data.filter((item) =>
      item.category === activeCategory
    );

    setFiltered(filtered);
  }, [activeCategory, data, setFiltered]);

  return (
    <div className="filter-container">
      <button
        className={activeCategory === "all" ? "active" : ""}
        onClick={() => setActiveCategory("all")}
      >
        All
      </button>
      <button
        className={activeCategory === "websites" ? "active" : ""}
        onClick={() => setActiveCategory("websites")}
      >
        Websites
      </button>
      <button
        className={activeCategory === "apps" ? "active" : ""}
        onClick={() => setActiveCategory("apps")}
      >
        Apps
      </button>
      <button
        className={activeCategory === "uiux" ? "active" : ""}
        onClick={() => setActiveCategory("uiux")}
      >
        UI/UX
      </button>
    </div>
  );
};

export default Filter;

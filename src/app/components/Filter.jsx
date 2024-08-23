import { useEffect } from "react";

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
        className={activeCategory === "website" ? "active" : ""}
        onClick={() => setActiveCategory("website")}
      >
        Websites
      </button>
      <button
        className={activeCategory === "app" ? "active" : ""}
        onClick={() => setActiveCategory("app")}
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

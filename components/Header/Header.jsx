"use client";
import React, { useEffect, useState } from 'react';

const Header = () => {
  // Define initial achievement data
  const initialAchievements = [
    { count: "0", info: "Years of Experience" },
    { count: "0", info: "Projects Completed" },
    { count: "0", info: "Satisfied Clients" },
    { count: "0", info: "Client Reviews" },
  ];

  // State to hold achievements data
  const [achievements, setAchievements] = useState(initialAchievements);

  // Effect to update achievement counts on page load
  useEffect(() => {
    // Update achievement counts based on some logic here
    // For demonstration, we'll update them immediately
    setAchievements([
      { count: "4+", info: "Years of Experience" },
      { count: "16+", info: "Projects Completed" },
      { count: "25+", info: "Satisfied Clients" },
      { count: "12+", info: "Client Reviews" },
    ]);

    // Cleanup function (not needed here since no event listeners are added)
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <header className="header container flex flex-col justify-between mx-auto mt-32 w-full">
      <h2 className="text-2xl font-bold text-cyanblue my-2">DevEleven</h2>
      <h1 className="text-6xl font-bold text-gradient my-4">
        Turning Ideas <br />
        into Reality
      </h1>
      <p className="my-4">We build elegant websites at affordable prices.</p>
      <button className="w-36 py-1 border-2 border-cyanmid text-cyanmid rounded-full my-4 hover:bg-cyanmid hover:text-ff transition">
        Get in Touch
      </button>

      {/* Achievements Section with added classes */}
      <div className="achievements flex flex-row justify-around my-8">
        {/* Dynamically generate each achievement */}
        {achievements.map((achievement, index) => (
          <div key={index} className="ml flex flex-col items-center">
            <span className="bigGradient">{achievement.count}</span>
            <span className="info">{achievement.info}</span>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;

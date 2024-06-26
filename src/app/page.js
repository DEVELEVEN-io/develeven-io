"use client";

import { useEffect, useState } from "react";
import { Header, Work, Services, Team, Tech, Navbar, Contact, Footer } from '../../components';

export default function Home() {
  const [skillsPlayed, setSkillsPlayed] = useState(false);
  const [mlPlayed, setMlPlayed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;

      if (!skillsPlayed && scrolled >= 1200) {
        loadSkills();
        setSkillsPlayed(true);
      }

      if (!mlPlayed && scrolled >= 1750) {
        mlCounter();
        setMlPlayed(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [skillsPlayed, mlPlayed]);

  function loadSkills() {
    const skCounters = document.querySelectorAll(".counter span");
    const progressBars = document.querySelectorAll(".sk-progress svg circle");

    skCounters.forEach((skCounter, index) => {
      const cvalue = Number(skCounter.dataset.target);
      let strokeValue = 427 - 427 * (cvalue / 100);

      progressBars[index].style.animation = "progress 2s ease-in-out forwards";
      progressBars[index].style.setProperty("--target", strokeValue);

      setTimeout(() => {
        updateCount(skCounter, cvalue);
      }, 400);
    });

    setTimeout(() => {
      setSkillsPlayed(true);
    }, 2000);
  }

  function mlCounter() {
    const mlCounters = document.querySelectorAll(".number span");

    mlCounters.forEach((mlCounter) => {
      const mvalue = Number(mlCounter.dataset.target);
      setTimeout(() => {
        updateCount(mlCounter, mvalue);
      }, 1000);
    });

    setMlPlayed(true);
  }

  function updateCount(num, maxNum) {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
      num.innerText = currentNum + 1;
      setTimeout(() => {
        updateCount(num, maxNum);
      }, 12);
    }
  }

  return (
    <div>
      <Navbar />
      <Header />
      <Work />
      <Services />
      <Team />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}

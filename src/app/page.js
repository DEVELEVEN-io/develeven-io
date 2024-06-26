"use client";
// src/app/pages.js
import { Header, Work, Services, Team, Tech, Navbar, Contact, Footer } from '../../components';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function stickyNav() {
      var navbar = document.querySelector(".navbar");
      navbar.classList.toggle("scrolled", window.pageYOffset > 0);
    }

    window.addEventListener("scroll", stickyNav);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", stickyNav);
    };
  }, []);

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

let skillsPlayed = false;
let mlPlayed = false;

if (typeof window !== "undefined") {
window.addEventListener("scroll", () => {

  if (!skillsPlayed) loadSkills();

  if (!mlPlayed) mlCounter();

});
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


function loadSkills() {
  const skCounters = document.querySelectorAll(".counter span");
  const progressBars = document.querySelectorAll(".sk-progress svg circle");
  
    const scrolled = window.scrollY;

    if (scrolled >= 1200) {
      
      for (let i = 0; i < skCounters.length; i++) {

        skillsPlayed = true;

        const cvalue = Number(skCounters[i].dataset.target);
        let strokeValue = 427 - 427 * (cvalue/100);

        progressBars[i].style.animation = "progress 2s ease-in-out forwards";
        progressBars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
          updateCount(skCounters[i], cvalue);
        }, 400);
      }

      setTimeout(() => {
        window.removeEventListener("scroll", loadSkills);
      }, 2000);
    }
}


function mlCounter() {

  let mlCounters = document.querySelectorAll(".number span");
  
  const scrolled = window.scrollY;
  
  if (scrolled >= 1750) {
    
    for (let i = 0; i < mlCounters.length; i++) {
      mlPlayed = true;

      let mvalue = Number(mlCounters[i].dataset.target);
      setTimeout(() => {
        updateCount(mlCounters[i], mvalue);
      }, 1000);
    }
  }
}
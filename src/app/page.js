// src/app/pages.js
import { Header, Work, Services, Team, Navbar } from '../../components';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Work />
      <Services />
      <Team />
    </div>
  );
}

// Sticky Nav
function stickyNav() {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.pageYOffset > 0);
}
// window.addEventListener("scroll", stickyNav);

let skillsPlayed = false;
let mlPlayed = false;
if (typeof window !== "undefined") {
window.addEventListener("scroll", () => {
  
  activeLink();

  stickyNav();

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
  // const scrollable =  document.documentElement.scrollHeight - window.innerHeight;
  
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
// End


// Services Milestones Counter Animation

// console.log(mlCounters);


function mlCounter() {
  // let mlSection = document.querySelectorAll(".milestones");
  let mlCounters = document.querySelectorAll(".number span");
  
  
  const scrolled = window.scrollY;
  
  if (scrolled >= 1750) {
    // console.log(mlCounters.length);
    
    for (let i = 0; i < mlCounters.length; i++) {
      mlPlayed = true;

      let mvalue = Number(mlCounters[i].dataset.target);
      setTimeout(() => {
        updateCount(mlCounters[i], mvalue);
      }, 1000);
    }
    
  }
}

// Active Nav Links

function activeLink() {
  var navbar = document.getElementById("navbar");
  // console.log();
  let sections = document.querySelectorAll(".section");
  let passedSections = Array.from(sections).map((sect, i) => {
    return { 
      y: sect.getBoundingClientRect().top - navbar.offsetHeight,
      id: i
    };
  }).filter(sect => sect.y <= 0);

    // console.log(passedSections);

  let currentSectID = passedSections.at(-1).id;
  // console.log(currentSectID);
  
  let navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(l => l.classList.remove("active"));
  navLinks[currentSectID].classList.add("active");

  // for (let i = 0; i < navLinks.length; i++) {
      
  //     console.log();
  //   }

  }

  
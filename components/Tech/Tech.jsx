"use client";
import { useEffect, useState } from 'react';
import { images } from '../../constants';
import Image from 'next/image';

const skillsData = [
  { name: 'HTML5', proficiency: 98, image: images.html, circleClass: 'p-circle1' },
  { name: 'CSS3', proficiency: 95, image: images.css, circleClass: 'p-circle2' },
  { name: 'JavaScript', proficiency: 90, image: images.javascript, circleClass: 'p-circle3' },
  { name: 'React', proficiency: 75, image: images.react, circleClass: 'p-circle4' },
  { name: 'Next.js', proficiency: 70, image: images.nextjs, circleClass: 'p-circle6' },
  { name: 'Tailwind', proficiency: 90, image: images.tailwind, circleClass: 'p-circle7' },
  { name: 'Python', proficiency: 75, image: images.python, circleClass: 'p-circle8' },
  { name: 'Figma', proficiency: 90, image: images.figma, circleClass: 'p-circle9' },
  { name: 'Git', proficiency: 100, image: images.git, circleClass: 'p-circle10' },
  { name: 'Firebase', proficiency: 55, image: images.firebase, circleClass: 'p-circle11' },
];

const Tech = () => {
  const [skillsPlayed, setSkillsPlayed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;
      const threshold = 1200;

      if (!skillsPlayed && scrolled >= threshold) {
        loadSkills();
        setSkillsPlayed(true);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [skillsPlayed]);

  function loadSkills() {
    const skCounters = document.querySelectorAll('.counter span');
    const progressBars = document.querySelectorAll('.sk-progress svg circle');

    skCounters.forEach((skCounter, index) => {
      const cvalue = Number(skCounter.dataset.target);
      let strokeValue = 427 - 427 * (cvalue / 100);

      progressBars[index].style.animation = 'progress 2s ease-in-out forwards';
      progressBars[index].style.setProperty('--target', strokeValue);

      setTimeout(() => {
        updateCount(skCounter, cvalue);
      }, 400);
    });

    setTimeout(() => {
      setSkillsPlayed(true);
    }, 2000);
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
    <section id="tech" className="container flex flex-col justify-between mx-auto mt-14 w-full">
      <h2 className="text-4xl font-bold text-gradient my-2">Technologies we use</h2>
      <p className="my-4">We try to adapt to the latest and the most advanced tech and frameworks on our projects.</p>

      <div className="skills-wrap">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <div className="sk-progress">
              <svg className={skill.circleClass}>
                <circle className={skill.circleClass} cx={75} cy={75} r={68} />
              </svg>
              <div className="techLogo">
                <Image loading="eager" src={skill.image} alt={`${skill.name} logo`} width={150} height={150} />
              </div>
              <h2 className="counter">
                <span data-target={skill.proficiency}>0</span>%
              </h2>
              <h1 className="sk-title">{skill.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;

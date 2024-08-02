"use client";
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import LogoSvg from "../../constants/svgs/logo";
import { images } from "../../constants";
import Image from "next/image";

const Header = () => {

  const initialAchievements = [
    { count: "0", info: "Years of Experience" },
    { count: "0", info: "Projects Completed" },
    { count: "0", info: "Satisfied Clients" },
    { count: "0", info: "Client Reviews" },
  ];

  const [achievements, setAchievements] = useState(initialAchievements);

  useEffect(() => {
    setAchievements([
      { count: "4+", info: "Years of Experience" },
      { count: "16+", info: "Projects Completed" },
      { count: "25+", info: "Satisfied Clients" },
      { count: "12+", info: "Client Reviews" },
    ]);

  }, []);

  return (
    <header className="header container flex flex-col justify-between mx-auto mt-32 w-full">

      <div className="headerItems rows flex flex-row mb-16 justify-center">

        <div className="headerInfo">

          <h2 className="text-3xl font-bold text-cyanblue mt-2">DevEleven</h2>
          <h1 className="text-7xl font-bold text-gradient my-2">
            Turning Ideas <br />
            into Reality
          </h1>
          <p className="mb-4 font-medium">We build elegant websites at affordable prices.</p>

          <div className="no-name h-auto my-4 mt-8">
            <ul className='flex gap-3'>
              <button className="w-36 py-2 my-auto border-2 border-cyanmid text-cyanmid rounded-full hover:bg-cyanmid hover:text-ff transition">
                Get in Touch
              </button>
              <li className='text-3xl text-cyanmid rounded-full my-auto hover:text-4xl hover:text-ff transition-all'>
                <a href="https://github.com/DEVELEVEN-io/" target='_blank'><FaGithub></FaGithub></a>
              </li>
              <li className='text-3xl text-cyanmid rounded-full my-auto hover:text-4xl hover:text-ff transition-all'>
                <a href="https://linkedin.com/" target='_blank'><FaLinkedin></FaLinkedin></a>
              </li>
              <li className='text-3xl text-cyanmid rounded-full my-auto hover:text-4xl hover:text-ff transition-all'>
                <a href="https://x.com/" target='_blank'><FaXTwitter></FaXTwitter></a>
              </li>
            </ul>
        </div>

        </div>

        <div className="logoAnim">
          <Image src={images.logo_3d_md} width={200} height={200} alt="Logo 3D"/>
          {/* <LogoSvg width={200} height={200}/> */}
        </div>

      </div>

      <div className="achievements flex flex-row justify-around my-8">
        {achievements.map((achievement, index) => (
          <div key={index} className="ml flex flex-row items-center">
            <span className="bigGradient">{achievement.count}</span>
            <span className="info w-20 ml-4">{achievement.info}</span>
          </div>
        ))}
      </div>


    </header>
  );
};

export default Header;

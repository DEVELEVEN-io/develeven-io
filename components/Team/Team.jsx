import { images } from "../../constants";
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaYoutube, FaGlobe, FaFacebook, FaTelegram } from 'react-icons/fa';
import React from "react";

const teamMembers = [
  {
    name: "Abid Al Wassie",
    image: images.portrait_abid_md,
    title: "Web Developer",
    description: "Abid Al Wassie is a Senior Developer at DevEleven-io. He is a Full-Stack Developer. He is the creator of oneManDev.",
    links: {
      website: "https://abidalwassie.me",
      github: "https://github.com/AbidAlWassie",
      youtube: "https://youtube.com/@oneManDev",
      linkedin: "https://www.linkedin.com/in/abidalwassie"
    }
  },
  {
    name: "Ragib Al Asad",
    image: images.portrait_ragib_md,
    title: "Web Developer",
    description: "Ragib Al Asad is a Senior Backend Developer at DevEleven-io and the founder of DevEleven. specializes in backend web technologies, particularly FastAPI and databases like MongoDB.",
    links: {
      website: "https://ragibalasad.me",
      github: "https://github.com/ragibalasad",
      facebook: "https://facebook.com/ragibalasad",
      linkedin: "https://www.linkedin.com/in/ragibalasad"
    }
  },
  {
    name: "Shihab Shahriar Rashu",
    image: images.portrait_rashu_md,
    title: "Web Developer",
    description: "Shihab Shahriar Rashu is a web developer at DevEleven-io. He's an integral part of the development team, with expertise in JavaScript and Python.",
    links: {
      facebook: "https://facebook.com/mdshihabshahriar.rashu",
      github: "https://github.com/muhammadshihab",
      linkedin: "https://www.linkedin.com/"
    }
  },
  {
    name: "Raiyan Takrim",
    image: images.portrait_raiyan_md,
    title: "Web Developer",
    description: "Raiyan Takrim  is a frontend developer at DevEleven-io. He possesses expertise in HTML, CSS, JS, Python, React, etc.",
    links: {
      facebook: "https://facebook.com/raiyan.takrim3",
      github: "https://github.com/raiyan-takrim",
      telegram: "https://t.me/raiyan_takrim"
    }
  }
];

const socialMedia = [
  { name: 'website', icon: FaGlobe },
  { name: 'github', icon: FaGithub },
  { name: 'youtube', icon: FaYoutube },
  { name: 'linkedin', icon: FaLinkedin },
  { name: 'facebook', icon: FaFacebook },
  { name: 'telegram', icon: FaTelegram },
];

const Team = () => {
  return (
    <section id="team" className="container flex flex-col justify-between mx-auto mt-14 w-full">
      <h2 className="text-4xl font-bold text-gradient my-2">Our Team</h2>
      <p className="my-4">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>

      <div className="memberCards row flex flex-row my-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto relative">
            <Image
              src={member.image}
              alt={member.name}
              width={297}
              className="object-cover rounded-t-md rounded-l-md rounded-b-none"
              priority  // Add priority property here
            />
            <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
            <div className="memberInfo flex flex-col mx-auto">
              <span className="memberName mb-1">{member.name}</span>
              <span className="memberTitle text-highlight mb-2">{member.title}</span>
              <div className="memberDesc">
                <p className="memberText">{member.description}</p>
                <ul className="memberLinks flex">
                  {socialMedia.map((platform, i) => {
                    const Icon = platform.icon;
                    return member.links[platform.name] ? (
                      <li key={i} className="memberLink text-4xl mx-auto px-4 pb-4 pt-8">
                        <a href={member.links[platform.name]} target="_blank" rel="noopener noreferrer">
                          <Icon />
                        </a>
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

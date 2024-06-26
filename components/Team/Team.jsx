import { images } from "../../constants";
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaYoutube, FaGlobe } from 'react-icons/fa';

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
    description: "Ragib Al Asad is a senior backend developer of DevEleven-io with 4+ years of experience. He is the founder of DevEleven.",
    links: {
      website: "https://facebook.com/ragibalasad",
      github: "https://github.com/ragibalasad",
      youtube: "https://youtube.com/@ragibalasad",
      linkedin: "https://www.linkedin.com/in/ragibalasad"
    }
  },
  {
    name: "Shihab Shahriar Rashu",
    image: images.portrait_rashu_md,
    title: "Web Developer",
    description: "Shihab Shahriar Rashu is one of the team members of DevEleven-io. He is a web developer specializing in JavaScript and Python programming languages.",
    links: {
      website: "https://facebook.com/mdshihabshahriar.rashu",
      github: "https://github.com/muhammadshihab",
      youtube: "https://youtube.com/",
      linkedin: "https://www.linkedin.com/"
    }
  },
  {
    name: "Abid Al Wassie",
    image: images.portrait_1_md,
    title: "Web Developer",
    description: "Abid Al Wassie is the senior developer of DevEleven-io. He is a full stack developer with 4+ years of experience. He is the creator of oneManDev.",
    links: {
      website: "https://abidalwassie.me",
      github: "https://github.com/AbidAlWassie",
      youtube: "https://youtube.com/@oneManDev",
      linkedin: "https://www.linkedin.com/in/abidalwassie"
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="container flex flex-col justify-between mx-auto mt-14 w-full">
      <h2 className="text-4xl font-bold text-gradient my-2">Our Team</h2>
      <p className="my-4">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>

      <div className="memberCards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto relative">
            <Image src={member.image} alt={member.name} width={300} height={300} className="object-cover rounded-t-md rounded-l-md rounded-b-none" />
            <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
            <div className="memberInfo flex flex-col mx-auto p-4">
              <span className="memberName mb-1 text-lg font-semibold">{member.name}</span>
              <span className="memberTitle text-highlight mb-2">{member.title}</span>
              <div className="memberDesc">
                <p className="memberText text-sm">{member.description}</p>
                <ul className="memberLinks flex gap-4">
                  <li className="memberLink"><a href={member.links.website} target="_blank" rel="noopener noreferrer"><FaGlobe /></a></li>
                  <li className="memberLink"><a href={member.links.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                  <li className="memberLink"><a href={member.links.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                  <li className="memberLink"><a href={member.links.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
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

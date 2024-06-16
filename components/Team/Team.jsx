import { images } from "../../constants";
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaYoutube, FaGlobe } from 'react-icons/fa';
const Team = () => {
  return (
    <section className="container flex flex-col justify-between mx-auto mt-14 w-full">
      <h2 className="text-4xl font-bold text-gradient my-2">Our Team</h2>
      <p className="my-4">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>

      <div className="row flex flex-row my-4">

        <div className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto">
          <Image src={images.portrait_abid_md} alt="Logo" width={300} height={300}/>
          <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
          <div className="memberInfo flex flex-col mx-auto">
            <span className="memberName mb-1">Abid Al Wassie</span>
            <span className="memberTitle text-highlight my-0">Web Developer</span>
            <div className="memberDesc">
              <p className="memberText">Abid Al Wassie is a senior developer of DevEleven-io. He is a full stack developer with 4+ years of experience. He is the creator of oneManDev. He has a long history with JavaScript and other technologies.</p>
              <ul className="memberLinks flex">
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://abidalwassie.me" target="_blank"><FaGlobe /></a></li>
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://github.com/AbidAlWassie" target="_blank"><FaGithub /></a></li>
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://youtube.com/@oneManDev" target="_blank"><FaYoutube /></a></li>
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://www.linkedin.com/in/abidalwassie" target="_blank"><FaLinkedin /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto">
          <Image src={images.portrait_ragib_md} alt="Logo" width={300} height={300}/>
          <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
          <div className="memberInfo flex flex-col mx-auto">
          <span className="memberName mb-1">Ragib Al Asad</span>
            <span className="memberTitle text-highlight my-0">Web Developer</span>
            <div className="memberDesc">
              <p className="memberText">Ragib Al Asad is a senior backend developer of DevEleven-io with 4+ years of experience. He is the founder of DevEleven. Holds strong understandings in backend web technology like FastAPI</p>
              <ul className="memberLinks flex">
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://facebook.com/ragibalasad" target="_blank"><FaGlobe /></a></li>
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://github.com/ragibalasad" target="_blank"><FaGithub /></a></li>
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://youtube.com/@ragibalasad" target="_blank"><FaYoutube /></a></li>
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://www.linkedin.com/in/ragibalasad" target="_blank"><FaLinkedin /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto">
          <Image src={images.portrait_1_md} alt="Logo" width={300} height={300}/>
          <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
          <div className="memberInfo flex flex-col mx-auto">
          <span className="memberName mb-1">Abid Al Wassie</span>
            <span className="memberTitle text-highlight my-0">Web Developer</span>
            <div className="memberDesc">
              <p className="memberText">Abid Al Wassie is the senior developer of DevEleven-io. He is a full stack developer with 4+ years of experience. He is the creator of oneManDev. He has a long history with JavaScript and other technologies.</p>
              <ul className="memberLinks flex">
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://abidalwassie.me" target="_blank"><FaGlobe /></a></li>
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://github.com/AbidAlWassie" target="_blank"><FaGithub /></a></li>
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://youtube.com/@oneManDev" target="_blank"><FaYoutube /></a></li>
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://www.linkedin.com/in/abidalwassie" target="_blank"><FaLinkedin /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto">
          <Image src={images.portrait_1_md} alt="Logo" width={300} height={300}/>
          <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
          <div className="memberInfo flex flex-col mx-auto">
          <span className="memberName mb-1">Abid Al Wassie</span>
            <span className="memberTitle text-highlight my-0">Web Developer</span>
            <div className="memberDesc">
              <p className="memberText">Abid Al Wassie is the senior developer of DevEleven-io. He is a full stack developer with 4+ years of experience. He is the creator of oneManDev. He has a long history with JavaScript and other technologies.</p>
              <ul className="memberLinks flex">
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://abidalwassie.me" target="_blank"><FaGlobe /></a></li>
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://github.com/AbidAlWassie" target="_blank"><FaGithub /></a></li>
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://youtube.com/@oneManDev" target="_blank"><FaYoutube /></a></li>
                <li className="text-4xl mx-auto mb-4 mt-8"><a href="https://www.linkedin.com/in/abidalwassie" target="_blank"><FaLinkedin /></a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default Team;

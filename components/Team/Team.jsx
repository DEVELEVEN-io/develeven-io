import { images } from "../../constants";
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaYoutube, FaGlobe, FaFacebook, FaTelegram } from 'react-icons/fa';
const Team = () => {
  return (
    <section id="team" className="container flex flex-col justify-between mx-auto mt-14 w-full">
      <h2 className="text-4xl font-bold text-gradient my-2">Our Team</h2>
      <p className="my-4">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>

      <div className="memberCards row flex flex-row my-4">

        <div className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto">
          <Image src={images.portrait_abid_md} alt="Logo" width={300} height={300}/>
          <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
          <div className="memberInfo flex flex-col mx-auto">
            <span className="memberName mb-1">Abid Al Wassie</span>
            <span className="memberTitle text-highlight my-0">Web Developer</span>
            <div className="memberDesc">
              <p className="memberText">Abid Al Wassie is a Senior Developer at DevEleven-io. He&apos; a Full-Stack Developer. He is the creator of <a className="text-cyanblue underline font-semibold" href="https://youtube.com/@oneManDev" target="_blank">oneManDev</a>.</p>
              <ul className="memberLinks flex">
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://abidalwassie.me" target="_blank"><FaGlobe /></a></li>
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://github.com/AbidAlWassie" target="_blank"><FaGithub /></a></li>
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://youtube.com/@oneManDev" target="_blank"><FaYoutube /></a></li>
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://www.linkedin.com/in/abidalwassie" target="_blank"><FaLinkedin /></a></li>
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
              <p className="memberText">Ragib Al Asad is a Senior Backend Developer at DevEleven-io and the founder of DevEleven. specializes in backend web technologies, particularly FastAPI.</p>
              <ul className="memberLinks flex">
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://facebook.com/ragibalasad" target="_blank"><FaFacebook /></a></li>
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://github.com/ragibalasad" target="_blank"><FaGithub /></a></li>
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://youtube.com/@ragibalasad" target="_blank"><FaYoutube /></a></li>
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://www.linkedin.com/in/ragibalasad" target="_blank"><FaLinkedin /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto">
          <Image src={images.portrait_rashu_md} alt="Logo" width={300} height={300}/>
          <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
          <div className="memberInfo flex flex-col mx-auto">
          <span className="memberName mb-1">Shihab Shahriar Rashu</span>
            <span className="memberTitle text-highlight my-0">Web Developer</span>
            <div className="memberDesc">
              <p className="memberText">Shihab Shahriar Rashu is a web developer at DevEleven-io. He&apos;s an integral part of the development team, with expertise in JavaScript and Python.</p>
              <ul className="memberLinks flex">
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://facebook.com/mdshihabshahriar.rashu" target="_blank"><FaFacebook/></a></li>
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://github.com/muhammadshihab" target="_blank"><FaGithub /></a></li>
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://youtube.com/" target="_blank"><FaYoutube /></a></li>
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://www.linkedin.com/" target="_blank"><FaLinkedin /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto">
          <Image src={images.portrait_raiyan_md} alt="Logo" width={300} height={300}/>
          <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
          <div className="memberInfo flex flex-col mx-auto">
          <span className="memberName mb-1">Raiyan Takrim</span>
            <span className="memberTitle text-highlight my-0">Web Developer</span>
            <div className="memberDesc">
              <p className="memberText">Raiyan Takrim  is a frontend developer at DevEleven-io. He posseses experties in HTML, CSS, JS, Python, React etc.</p>
              <ul className="memberLinks flex">
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://facebook.com/raiyan.takrim3" target="_blank"><FaFacebook /></a></li>
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://github.com/raiyan-takrim" target="_blank"><FaGithub /></a></li>
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://youtube.com/" target="_blank"><FaYoutube /></a></li>
                <li className="memberLink text-4xl mx-auto px-4 pb-4 pt-8"><a href="https://t.me/raiyan_takrim" target="_blank"><FaTelegram /></a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default Team;

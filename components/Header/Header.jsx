// components/Header.js
// import Image from 'next/image';

const Header = () => {
  return (
    <header className="container flex flex-col justify-between mx-auto w-full">
      <h2 className="text-2xl font-bold text-cyanblue my-2">DevEleven</h2>
      <h1 className="text-6xl font-bold text-gradient my-4">Turning Ideas <br />
      into Reality</h1>
      <p className="my-4">We build elegant websites at affordable prices.</p>
      <button className="w-36 py-1 border-2 border-cyanmid text-cyanmid rounded-full my-4 hover:bg-cyanmid hover:text-ff transition">Get in Touch</button>

      <div className="achivements flex flex-row">

      <div className="achivement mx-auto flex flex-row items-center">
          <span className="bigGradient mx-4">4+</span> 
          <span className="info">
          Years of<br />
          Experience
          </span>
        </div>

        <div className="achivement mx-auto flex flex-row items-center">
          <span className="bigGradient mx-4">16+</span> 
          <span className="info">
          Projects <br />
          Completed
          </span>
        </div>

        <div className="achivement mx-auto flex flex-row items-center">
          <span className="bigGradient mx-4">25+</span> 
          <span className="info">
          Satisfied <br />
          Clients
          </span>
        </div>

        <div className="achivement mx-auto flex flex-row items-center">
          <span className="bigGradient mx-4">12+</span> 
          <span className="info">
          Client <br />
          Reviews
          </span>
        </div>


      </div>
      
    </header>
  );
};

export default Header;

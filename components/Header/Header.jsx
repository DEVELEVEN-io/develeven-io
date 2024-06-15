// components/Header.js
// import Image from 'next/image';

const Header = () => {
  return (
    <header className="container flex flex-col justify-between mx-auto w-full">
      <h2 className="text-2xl font-bold text-cyanblue my-2">DevEleven</h2>
      <h1 className="text-6xl font-bold text-gradient my-2">Turning Ideas <br />
      into Reality</h1>
      <p>We build elegant websites at affordable prices.</p>
    </header>
  );
};

export default Header;

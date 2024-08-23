import { images } from "@/../../data/";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a 
            href="#" 
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image 
              src={images.logo} 
              alt="DevEleven logo" 
              className="h-8" 
              width={32} // Ensure the width and height are specified
              height={32}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              DevEleven-io
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a 
                href="#about-us" 
                className="hover:underline me-4 md:me-6" 
                aria-label="About Us"
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#license" 
                className="hover:underline me-4 md:me-6" 
                aria-label="License"
              >
                License
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/DEVELEVEN-io/develeven-io" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline me-4 md:me-6" 
                aria-label="Contribute"
              >
                Contribute
              </a>
            </li>
            <li>
              <a 
                href="#contact-us" 
                className="hover:underline" 
                aria-label="Contact Us"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-lightgray sm:mx-auto lg:my-8" />
        <div className="text-center text-gray-500 text-sm dark:text-gray-400">
          &copy; 2024 <a href="https://github.com/DEVELEVEN-io/develeven-io" className="hover:underline">DevEleven™</a>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { images } from "../../constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container flex flex-col justify-between mx-auto mt-14 w-full">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <div className="flex flex-row items-center">
          <Image src={images.logo} alt="logo-ct" className="w-10" />
          <span className="ml-2 text-highlight font-bold text-xl">DevEleven-io</span>
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal"
            >
              About Us
            </div>
          </li>
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal"
            >
              License
            </div>
          </li>
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal"
            >
              Contribute
            </div>
          </li>
          <li>
            <div
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal"
            >
              Contact Us
            </div>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-cyandark" />
      <div color="blue-gray" className="text-center font-normal my-8">
        &copy; 2024 DevEleven
      </div>
    </footer>
  );
};

export default Footer;

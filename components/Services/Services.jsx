import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="container flex flex-col justify-between mx-auto mt-14 w-full">
      <h2 className="text-4xl font-bold text-gradient my-2">Our Top Services</h2>
      <p className="my-4">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>

      <div className="row flex flex-col">
        
        <div className="service-card flex flex-row items-center bgGradient my-2 rounded-md py-4 px-8">
          <span className="service-num text-2xl font-bold mr-4">01</span>
          <h3 className="text-3xl font-bold text-txtdark my-2 mx-4">Web Development</h3>
          <p className="my-4 ml-auto">We break down complex user experience problems to create integrity-focused solutions that connect billions of people</p>
            <div className="service-arrow text-2xl ml-4">
              <FaLongArrowAltRight />
            </div>
        </div>

        <div className="service-card flex flex-row items-center bgGradient my-2 rounded-md py-4 px-8">
          <span className="service-num text-2xl font-bold mr-4">02</span>
          <h3 className="text-3xl font-bold text-txtdark my-2 mx-4">Web Development</h3>
          <p className="my-4 ml-auto">We break down complex user experience problems to create integrity-focused solutions that connect billions of people</p>
          <div className="service-arrow text-2xl ml-4">
              <FaLongArrowAltRight />
            </div>
        </div>

        <div className="service-card flex flex-row items-center bgGradient my-2 rounded-md py-4 px-8">
          <span className="service-num text-2xl font-bold mr-4">03</span>
          <h3 className="text-3xl font-bold text-txtdark my-2 mx-4">Web Development</h3>
          <p className="my-4 ml-auto">We break down complex user experience problems to create integrity-focused solutions that connect billions of people</p>
          <div className="service-arrow text-2xl ml-4">
              <FaLongArrowAltRight />
            </div>
        </div>

        <div className="service-card flex flex-row items-center bgGradient my-2 rounded-md py-4 px-8">
          <span className="service-num text-2xl font-bold mr-4">04</span>
          <h3 className="text-3xl font-bold text-txtdark my-2 mx-4">Web Development</h3>
          <p className="my-4 ml-auto">We break down complex user experience problems to create integrity-focused solutions that connect billions of people</p>
          <div className="service-arrow text-2xl ml-4">
              <FaLongArrowAltRight />
            </div>
        </div>
      </div>
      
    </section>
  );
};

export default Services;

import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="services container flex flex-col justify-between mx-auto mt-14 w-full">
      <h2 className="text-4xl font-bold text-gradient my-2">Our Top Services</h2>
      <p className="my-4">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>

      <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="service-card flex flex-col bgGradient my-2 rounded-md py-4 px-8">
          <div className="flex items-center">
            <span className="service-num text-2xl font-bold mr-4">01</span>
            <h3 className="text-3xl font-bold text-txtdark my-2 mx-4">Frontend Development</h3>
          </div>
          <p className="my-4">
            Our Frontend Development service focuses on crafting intuitive and responsive user interfaces. We use the latest technologies to ensure your website is fast, interactive, and visually appealing, providing an exceptional user experience on any device.
          </p>
          <div className="service-arrow text-2xl ml-auto">
            <FaLongArrowAltRight />
          </div>
        </div>

        <div className="service-card flex flex-col bgGradient my-2 rounded-md py-4 px-8">
          <div className="flex items-center">
            <span className="service-num text-2xl font-bold mr-4">02</span>
            <h3 className="text-3xl font-bold text-txtdark my-2 mx-4">Backend Development</h3>
          </div>
          <p className="my-4">
            Our Backend Development service ensures your website functions seamlessly behind the scenes. We build robust and scalable server-side applications, manage databases, and implement secure authentication and authorization mechanisms to support your business operations.
          </p>
          <div className="service-arrow text-2xl ml-auto">
            <FaLongArrowAltRight />
          </div>
        </div>

        <div className="service-card flex flex-col bgGradient my-2 rounded-md py-4 px-8">
          <div className="flex items-center">
            <span className="service-num text-2xl font-bold mr-4">03</span>
            <h3 className="text-3xl font-bold text-txtdark my-2 mx-4">API Development</h3>
          </div>
          <p className="my-4">
            Our API Development service allows your applications to communicate efficiently and securely. We design and implement APIs that are scalable, well-documented, and easy to integrate, enabling seamless data exchange and functionality extension across different platforms.
          </p>
          <div className="service-arrow text-2xl ml-auto">
            <FaLongArrowAltRight />
          </div>
        </div>

        <div className="service-card flex flex-col bgGradient my-2 rounded-md py-4 px-8">
          <div className="flex items-center">
            <span className="service-num text-2xl font-bold mr-4">04</span>
            <h3 className="text-3xl font-bold text-txtdark my-2 mx-4">Others</h3>
          </div>
          <p className="my-4">
            We offer a variety of other services to meet your unique needs. Whether you require consulting, custom software development, or technical support, our team is here to provide tailored solutions that help you achieve your goals.
          </p>
          <div className="service-arrow text-2xl ml-auto">
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Services;

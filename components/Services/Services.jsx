// import Image from 'next/image';

const Services = () => {
  return (
    <section className="container flex flex-col justify-between mx-auto mt-14 w-full">
      <h2 className="text-3xl font-bold text-gradient my-2">Our Top Services</h2>
      <p className="my-4">We put your ideas and thus your wishes in the form of a unique web project that
      inspires you and you customers.</p>

      <div className="row flex flex-col">
        
        <div className="service-card flex flex-row items-center bgGradient my-2 rounded-md px-4">
          <span className="service-num text-2xl font-bold mr-4">01</span>
          <h3 className="text-3xl font-bold text-txtdark my-2 mr-4">Web Development</h3>
          <p className="my-4">We break down complex user experinece problems to create
integritiy focussed solutions that connect billions of people</p>
        </div>

        <div className="service-card flex flex-row items-center bgGradient my-2 rounded-md px-4">
          <span className="service-num text-2xl font-bold mr-4">02</span>
          <h3 className="text-3xl font-bold text-txtdark my-2 mr-4">Web Development</h3>
          <p className="my-4">We break down complex user experinece problems to create
integritiy focussed solutions that connect billions of people</p>
        </div>

        <div className="service-card flex flex-row items-center bgGradient my-2 rounded-md px-4">
          <span className="service-num text-2xl font-bold mr-4">03</span>
          <h3 className="text-3xl font-bold text-txtdark my-2 mr-4">Web Development</h3>
          <p className="my-4">We break down complex user experinece problems to create
integritiy focussed solutions that connect billions of people</p>
        </div>

        <div className="service-card flex flex-row items-center bgGradient my-2 rounded-md px-4">
          <span className="service-num text-2xl font-bold mr-4">04</span>
          <h3 className="text-3xl font-bold text-txtdark my-2 mr-4">Web Development</h3>
          <p className="my-4">We break down complex user experinece problems to create
integritiy focussed solutions that connect billions of people</p>
        </div>
      </div>
      
    </section>
  );
};

export default Services;

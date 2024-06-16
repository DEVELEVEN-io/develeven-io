import { images } from "../../constants";
import Image from 'next/image';
const Team = () => {
  return (
    <section className="container flex flex-col justify-between mx-auto mt-14 w-full">
      <h2 className="text-4xl font-bold text-gradient my-2">Our Team</h2>
      <p className="my-4">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>

      <div className="row flex flex-row my-4">

        <div className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto">
          <Image src={images.portrait_1_md} alt="Logo" width={300} height={300}/>
          <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
          <div className="memberInfo flex flex-col mx-auto">
            <span className="memberName">Abid Al Wassie</span>
            <span className="memberTitle text-highlight">Web Developer</span>
          </div>
        </div>

        <div className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto">
          <Image src={images.portrait_1_md} alt="Logo" width={300} height={300}/>
          <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
          <div className="memberInfo flex flex-col mx-auto">
            <span className="memberName">Abid Al Wassie</span>
            <span className="memberTitle text-highlight">Web Developer</span>
          </div>
        </div>

        <div className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto">
          <Image src={images.portrait_1_md} alt="Logo" width={300} height={300}/>
          <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
          <div className="memberInfo flex flex-col mx-auto">
            <span className="memberName">Abid Al Wassie</span>
            <span className="memberTitle text-highlight">Web Developer</span>
          </div>
        </div>

        <div className="memberCard bg-bglight rounded-t-md rounded-l-md rounded-b-none flex flex-col mx-auto">
          <Image src={images.portrait_1_md} alt="Logo" width={300} height={300}/>
          <div className="memberGradient absolute inset-0 rounded-t-md rounded-l-md rounded-b-none" />
          <div className="memberInfo flex flex-col mx-auto">
            <span className="memberName">Abid Al Wassie</span>
            <span className="memberTitle text-highlight">Web Developer</span>
          </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default Team;

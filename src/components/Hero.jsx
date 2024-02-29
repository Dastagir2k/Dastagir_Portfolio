import HeriImg from "../assets/Lovepik_com-401643778-programmer.png";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";
const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row px-5 py-32 bg-gradient-to-b from-gray-800 to-black justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-7xl font-hero-font">
          Hi,
          <br /> Im Dastagir
          <p className="text-4xl">Im a Full-stack Developer</p>
        </h1>
        <div className="flex py-10">
          <a href="#" className="pr-4 hover:text-white">
            <BsTwitterX  size={35}/>
          </a>
          <a href="#" className="pr-4 hover:text-white">
            <AiOutlineGithub size={40} />
          </a>
          <a href="#" className="hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
      </div>
      <img className=" md:w-1/3" src={HeriImg} />
    </section>
  );
};

export default Hero;

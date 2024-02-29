import AboutImg from "../assets/about.png";
const About = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center bg-primary h-screen">
      <div className="md:w-1/2 p-10 flex justify-center h-[580px] mt-10">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center text-white p-5">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl  border-b-4 border-[#3d3636] w-[170px] mb-5 font-bold">About me</h1>
          <p className=" text-2xl mb-5">Hi, My name is Dastagir Ahmed. Im a Full-stack developer. I Built beautiful Webstites with React.js and Tailwind css  </p>
          <p className="text-2xl mb-5">I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.</p>
          <p className="text-2xl">In backend I know Node.js, Express.js, MongoDB,  Mongoose , Mysql , Docker</p>
        </div>
      </div>
    </section>
  );
};

export default About;

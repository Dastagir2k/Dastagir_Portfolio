




import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills"className="md:pt-10 bg-gradient-to-b from-gray-800 to-black text-white min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center pt-10">
        <div className="">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline pt-10">Experience</p>
          <p className="py-6">These are the Technologies I have worked with</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 md:px-12">
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <AiOutlineHtml5 size={80} className="w-20 mx-auto" />
            <p className="mt-4">HTML</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <FaCss3Alt size={80} className="w-20 mx-auto" />
            <p className="mt-4">CSS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <TbBrandJavascript size={80} className="w-20 mx-auto" />
            <p className="mt-4">JavaScript</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <FaReact size={80} className="w-20 mx-auto" />
            <p className="mt-4">React.js</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <TbBrandCpp size={80} className="w-20 mx-auto" />
            <p className="mt-4">C++</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <FaNode size={80} className="w-20 mx-auto" />
            <p className="mt-4">Node.js</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <SiExpress size={80} className="w-20 mx-auto" />
            <p className="mt-4">Express.js</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <DiMongodb size={80} className="w-20 mx-auto" />
            <p className="mt-4">MongoDB</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
            <SiMysql size={80} className="w-20 mx-auto" />
            <p className="mt-4">MySQL</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;

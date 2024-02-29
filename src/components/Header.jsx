import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-scroll";
const Header = () => {
  const [togglemenu, setToggle] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-5 py-2 bg-primary text-white z-50 ">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center ">
        <a className="text-bold" href="#">
          Dastagir
        </a>
        <nav className="hidden md:block">
          <ul className="flex gap-x-5">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-purple-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-purple-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-purple-400"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="project"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-purple-400"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-purple-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {togglemenu && (
          <nav className="md:hidden">
            <ul className="flex flex-col mobile-nav">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-purple-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-purple-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-purple-400"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="project"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-purple-400"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-purple-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <button
          onClick={() => setToggle(!togglemenu)}
          className="block md:hidden"
        >
          <Bars3Icon className="text-white h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;

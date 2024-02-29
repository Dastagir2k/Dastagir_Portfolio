import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
const Header = () => {
    const [togglemenu,setToggle]=useState(false);
  return (
    <header className="flex justify-between px-5  py-2 bg-primary text-white">
      <a className="text-bold" href="#">
        Dastagir
      </a>
      <nav className="hidden md:block">
        <ul className="flex gap-x-5 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      { togglemenu && <nav className="block md:hidden ">
        <ul className="flex flex-col mobile-nav ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
        }
      <button onClick={()=>setToggle(!togglemenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
  );
};

export default Header;

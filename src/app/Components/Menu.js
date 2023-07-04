'use client';
import Image from 'next/image';
import { CiMenuFries } from 'react-icons/ci';
import navIcon from '/public/images/nav-icon.png';
import { useState } from 'react';

const Menu = ({ slug }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="menu-container bg-[#F6F6FB] fixed left-1/2 bottom-10 transform translate-x-[-50%]  md:translate-y-[-4px] p-1 rounded-md z-40">
      <div className={`menu p-3 ${showMenu ? 'block' : 'hidden'}`}>
        <h5>Home</h5>
        <ul className="pl-2">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex bg-white p-3 items-center justify-between min-w-[200px]">
        <Image src={navIcon} alt="Icon" className="pr-1" /> <span>Home</span> <span className={`px-1 ${slug ? 'block' : 'hidden'}`}>{`>`}</span> <span>{slug}</span> <CiMenuFries className="ml-1 text-2xl cursor-pointer" onClick={() => setShowMenu((prev) => !prev)} />
      </div>
    </div>
  );
};

export default Menu;

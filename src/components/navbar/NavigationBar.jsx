import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { logo } from '../../assets';
import NavItem from './NavItem';

const navItems = [
  {
    id: 1,
    title: 'My Assignment',
    path: '#',
  },
  {
    id: 2,
    title: 'Chat with Mentor',
    path: '#',
  },
];

const NavigationBar = () => {
  const [profileName, setProfileName] = useState('ProfileName');

  return (
    <nav className={`
        bg-white lg:h-[73px]  
        drop-shadow-[0px_1px_4px_rgba(0, 0, 0, 0.1)] 
        relative lg:pt-[6px]
        flex justify-between items-center`}
    >

      {/* Navbar logo */}
      <img src={logo} alt="Logo" className="object-contain lg:h-16 md:h-16 lg:ml-[73px] ml-[3px] block lg:mt-0 md:mt-0 mt-16" />

      {/* Navbar tabs items for desktop screen */}
      <div className="lg:flex md:flex hidden flex-row items-center gap-5 mr-20 ">
        {
          navItems.map((item) => (
            <NavItem key={item.id} path={item.path} title={item.title} />
          ))
        }
        <div className="flex flex-row items-center gap-1">
          <FaUserCircle className="text-primary w-6 h-6" />
          <p className="font-medium text-lg text-center text-primary">
            { profileName }
          </p>
          <BiChevronDown className="text-primary w-6 h-6" />
        </div>
      </div>

      {/* Navbar tabs items for mobile screen */}
      <button type="button" className="group lg:hidden md:hidden flex flex-row items-center gap-2.5 bg-primary rounded-[10px] py-3 px-6 mr-8 mt-16">
        <p className="font-medium lg:text-lg md:text-lg text-base text-center text-white">
          { profileName }
        </p>
        <BiChevronDown className="text-white w-6 h-6" />
      </button>
    </nav>
  );
};

export default NavigationBar;

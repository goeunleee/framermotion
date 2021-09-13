import React from 'react';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
   {
    title: 'Home',
    path: '/',
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: 'nav-text'
  },
  {
    title: 'search',
    path: '/ToSearch',
    icon: <BsIcons.BsSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/Profile',
    icon: <BsIcons.BsFillInfoCircleFill />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/Contact',
    icon: <BsIcons.BsChatQuote />,
    cName: 'nav-text'
  }
];

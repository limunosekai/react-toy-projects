import React from 'react';
import {
  FaBlogger,
  FaGooglePlus,
  FaGithubAlt,
  FaHome,
  FaFolderOpen,
  FaUserFriends,
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
    icon: <FaFolderOpen />,
  },
  {
    id: 3,
    url: '/contact',
    text: 'Contact',
    icon: <FaUserFriends />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://github.com/limunosekai',
    icon: <FaGithubAlt />,
  },
  {
    id: 2,
    url: 'https://limunosekai.github.io/',
    icon: <FaBlogger />,
  },
  {
    id: 3,
    url: 'mailto:powerlsh0103@gmail.com',
    icon: <FaGooglePlus />,
  },
];

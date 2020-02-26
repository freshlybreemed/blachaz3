import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { styles } from '../constants/styles';

const dev = process.env.NODE_ENV === 'development';

const Navigation = () => {
  return (
    <header class='bg-white-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
      <nav class='f5 fw6  tracked'>
        <a
          class='link bg-black-90 pa2  white fw7 dim  dib mr3'
          href='/'
          title='Home'>
          Home
        </a>
        <a
          class='link bg-black-90 pa1  white  fw7 dim  dib mr3'
          href='/about'
          title='About'>
          About
        </a>
        <a
          class='link bg-black-90 pa2  white fw7 dim  dib mr3'
          href='/projects'
          title='Store'>
          Fist Up Afros Out
        </a>
        <a
          class='link  bg-black-90 pa1  white  fw7  dim  mr3'
          href='/contact'
          title='Contact'>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navigation;

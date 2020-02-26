import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { styles } from '../constants/styles';

const dev = process.env.NODE_ENV === 'development';

const Navigation = () => {
  return (
    <header class='bg-white-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
      <nav class='f5 fw6  tracked'>
        <Link href='/'>
          <a class='link bg-black-90 pa2  white fw7 dim  dib mr3' title='Home'>
            Home
          </a>
        </Link>
        <Link href='/about'>
          <a
            class='link bg-black-90 pa1  white  fw7 dim  dib mr3'
            title='About'>
            About
          </a>
        </Link>
        <Link href='/fists-up-afros-out'>
          <a
            class='link bg-black-90 pa2  white fw7 dim  dib mr3'
            title='Fist Up Afros Out'>
            Fist Up Afros Out
          </a>
        </Link>
        <Link href='/projects'>
          <a
            class='link bg-black-90 pa1  white fw7 dim  dib mr3'
            title='Fist Up Afros Out'>
            Projects
          </a>
        </Link>
        <Link href='/contact'>
          <a
            class='link  bg-black-90 pa2  white  fw7  dim  mr3'
            title='Contact'>
            Contact
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;

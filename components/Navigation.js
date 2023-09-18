import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { styles } from '../constants/styles';

const dev = process.env.NODE_ENV === 'development';

const Navigation = () => {
  return (
    <header class='bg-white-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
      <nav class='f5 fw6  tracked'>
        <Link
          href='/'
          class='link bg-black-90 pa2  white fw7 dim  dib mb1 mr3'
          title='Home'>
          
            Home
          
        </Link>
        <Link
          href='/projects'
          class='link bg-black-90 pa1  white fw7 dim  dib mr3'
          title='Projects'>
          
            Projects
          
        </Link>
        <Link
          href='/sustainable-fashion'
          class='link bg-black-90 pa2  white  fw7 dim  dib mr3'
          title='Sustainable Fashion'>
          
            Sustainable Fashion
          
        </Link>
        <Link
          href='/photos'
          class='link bg-black-90 pa1  white  fw7 dim  dib mr3'
          title='Travel'>
          
            Travel
          
        </Link>
        <Link
          href='/fists-up-afros-out'
          class='link bg-black-90 pa2  white fw7 dim mb2 dib mr3'
          title='Featues/Press/Interviews'>
          
            Featues/Press/Interviews
          
        </Link>
        <Link
          href='/shop'
          class='link  bg-black-90 pa1  white  fw7  dim  mr3'
          title='Shop'>
          
            Shop
          
        </Link>
        <Link
          href='/contact'
          class='link  bg-black-90 pa2  white  fw7  dim  mr3'
          title='General Bookings'>
          
            General Bookings
          
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;

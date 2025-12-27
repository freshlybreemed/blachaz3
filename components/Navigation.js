import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { styles } from '../constants/styles';

const dev = process.env.NODE_ENV === 'development';

const Navigation = () => {
  return (
    <header className='bg-white-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
      <nav className='f5 fw6  tracked'>
        <Link
          href='/'
          className='link bg-black-90 pa2  white fw7 dim  dib mb1 mr3'
          title='Home'>
          Home
        </Link>{' '}
        <Link
          href='/fists-up-afros-out'
          className='link bg-black-90 pa2  white fw7 dim mb2 dib mr3'
          title='Fists Up Afros Out'>
          Fists Up Afros Out
        </Link>
        <Link
          href='/projects'
          className='link bg-black-90 pa1  white fw7 dim  dib mr3'
          title='Projects'>
          Projects
        </Link>
        <Link
          href='/contact'
          className='link  bg-black-90 pa2  white  fw7  dim  mr3'
          title='Contact'>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;

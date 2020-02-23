import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { styles } from '../constants/styles';

const dev = process.env.NODE_ENV === 'development';

const Navigation = () => {
  return (
    <header class="bg-white-70 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav class="f6 fw6 ttu tracked">
        <a class="link fw7 dim black dib mr3" href="/" title="Home">Home</a>
        <a class="link fw7 dim black dib mr3" href="#" title="About">About</a>
        <a class="link fw7 dim black dib mr3" href="/projects" title="Store">Projects</a>
        <a class="link    fw7  dim black dib" href="/contact" title="Contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navigation;

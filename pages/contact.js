import { styles } from '../constants/styles';
import React from 'react';
import ContactForm from '../components/ContactForm';
import Wrapper from '../components/Wrapper';

const data = {
  description: 'Fists Up Afros Out',
  header: `Blachaz3 | `,
};

const Home = () => (
  <div>
    <Wrapper data={data}>
      <article class='helvetica pt6'>
        <div className='measure-wide mt3 mb3'>
          <section class='cf w-100 pa2-ns'>
            <span className={`${styles.section}`}>Let's Chat</span>
          </section>
        </div>
        <div class='serif ph2 ph4-m ph5-l pb5'>
          <div class='f3 fw7 black lh-title pa2 pb3'>
            🚀{' '}
            <a href='mailto:blachaz3@aol.com' class={`${styles.link}`}>
              blachaz3@aol.com{' '}
            </a>
          </div>
          <h4 className=' f4-m f4-l mt0 mb4 measure fw6'>
            How can Blachaz3 help you today? Shoot an email or feel free to use
            the form below to tell us about your marketing and event programming
            needs.
          </h4>
          <ContactForm />
        </div>
      </article>
    </Wrapper>
  </div>
);
export default Home;

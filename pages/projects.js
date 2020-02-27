import { styles } from '../constants/styles';
import React from 'react';
// import SignUpForm from '../components/SignUpForm';
import Wrapper from '../components/Wrapper';

const data = {
  description: 'Fist Up Afros Out',
  header: `Blachaz3`,
};

const Home = () => (
  <div>
    <Wrapper data={data}>
      <article class='helvetica pt6'>
        <div className='measure-wide mt3 mb3'>
          <section class='cf w-100 pa2-ns'>
            <span className={`${styles.section}`}>Videos</span>
          </section>
        </div>
        <div class='ph3'>
          <div class='aspect-ratio aspect-ratio--16x9 mv5 '>
            <iframe
              src='https://www.youtube.com/embed/JO-ADJ8kRcQ'
              class='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <div class='aspect-ratio aspect-ratio--16x9 mv5 '>
            <iframe
              src='https://www.youtube.com/embed/shaqxC8vKWA'
              class='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <div class='aspect-ratio aspect-ratio--16x9 mv5 '>
            <iframe
              src='https://www.youtube.com/embed/Yi79yy3-OtM'
              class='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <div class='aspect-ratio aspect-ratio--16x9 mv5 '>
            <iframe
              src='https://www.youtube.com/embed/oR07Xclvpi0'
              class='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <div class='aspect-ratio aspect-ratio--16x9 mv5 '>
            <iframe
              src='https://www.youtube.com/embed/iTsvWxraxDk'
              class='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
        </div>
      </article>
    </Wrapper>
  </div>
);
export default Home;

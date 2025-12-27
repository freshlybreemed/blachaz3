import { styles } from '../constants/styles';
import React from 'react';
// import SignUpForm from '../components/SignUpForm';
import Wrapper from '../components/Wrapper';

const data = {
  description: 'Fists Up Afros Out',
  header: `Blachaz3`,
};

const Home = () => (
  <div>
    <Wrapper data={data}>
      <article className='helvetica pt6'>
        <div className='measure-wide mt3 mb3'>
          <section className='cf w-100 pa2-ns'>
            <span className={`${styles.section}`}>Projects</span>
          </section>
        </div>
        <div className='ph4 ph5-l'>
          <div className='aspect-ratio aspect-ratio--16x9 mt5 '>
            <iframe
              src='https://www.youtube.com/embed/JO-ADJ8kRcQ'
              className='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <h3 className='f5 f4-ns mb0 black-90'>
            #BarGAININGwithBlachaz3: Dont Box Me In EP.2
          </h3>
          <h3 className='f6 f5 fw4 mt2 black-60'>Original Webseries</h3>
          <div className='aspect-ratio aspect-ratio--16x9 mt5 '>
            <iframe
              src='https://www.youtube.com/embed/shaqxC8vKWA'
              className='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <h3 className='f5 f4-ns mb0 black-90'>
            Screening of short film "33" - DC's Game
          </h3>
          <h3 className='f6 f5 fw4 mt2 black-60'>Blachaz3 Hosts</h3>
          <div className='aspect-ratio aspect-ratio--16x9 mt5 '>
            <iframe
              src='https://www.youtube.com/embed/Yi79yy3-OtM'
              className='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <h3 className='f5 f4-ns mb0 black-90'>
            How To Culturally Tie A Baby On Your Back
          </h3>
          <h3 className='f6 f5 fw4 mt2 black-60'>Blachaz3 in Ghana</h3>
          <div className='aspect-ratio aspect-ratio--16x9 mt5 '>
            <iframe
              src='https://www.youtube.com/embed/oR07Xclvpi0'
              className='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <h3 className='f5 f4-ns mb0 black-90'>
            #BarGAININGwithBlachaz3: Dont Box Me In EP.1
          </h3>
          <h3 className='f6 f5 fw4 mt2 black-60'>Original Webseries</h3>
          <div className='aspect-ratio aspect-ratio--16x9 mt5 '>
            <iframe
              src='https://www.youtube.com/embed/iTsvWxraxDk'
              className='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <h3 className='f5 f4-ns mb0 black-90'>
            #BarGAININGwithBlachaz3: Theme Song
          </h3>
          <h3 className='f6 f5 fw4 mt2 black-60'>Original Webseries</h3>
          <div className='aspect-ratio aspect-ratio--16x9 mt5 '>
            <iframe
              src='https://www.youtube.com/embed/eYJ-g-RITK8'
              className='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <h3 className='f5 f4-ns mb0 black-90'>
            #BarGAININGwithBlachaz3: Introduction
          </h3>
          <h3 className='f6 f5 fw4 mt2 black-60'>Original Webseries</h3>
          <div className='aspect-ratio aspect-ratio--16x9 mt5 '>
            <iframe
              src='https://www.youtube.com/embed/336DuvPumgo'
              className='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <h3 className='f5 f4-ns mb0 black-90'>
            #BarGAININGwithBlachaz3: Episode 1
          </h3>
          <h3 className='f6 f5 fw4 mt2 black-60'>Original Webseries</h3>
          <div className='aspect-ratio aspect-ratio--16x9 mt5 '>
            <iframe
              src='https://www.youtube.com/embed/RSJ7OlnNtM0'
              className='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <h3 className='f5 f4-ns mb0 black-90'>
            #BarGAININGwithBlachaz3: Introduction
          </h3>
          <h3 className='f6 f5 fw4 mt2 mb5 black-60'>Original Webseries</h3>
        </div>
      </article>
    </Wrapper>
  </div>
);
export default Home;

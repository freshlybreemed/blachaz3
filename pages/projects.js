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
            <span className={`${styles.section}`}>Fist Up Afros Out</span>
          </section>
        </div>
        <div className='mw9 db center pa4 pt2-ns ph7-l'>
          <img
            className='w-80 center db f5 measure'
            src='/static/img/output-onlinepngtools (1).png'
          />
          <h4 className=' f4-m f4-l mt0 mb4 measure fw6 pv4-l center'>
            When you mix fashion and philanthropy, what do you get? A formula
            that was created by mistake, but gaining it’s way to a household
            brand. Hazel aims to promote UNITY through fashion, art and
            community service.
          </h4>

          <div className='mw9 db center pa2 pt2-ns'>
            <img
              className=' center db  w-100'
              src='/static/img/48911613411_525c430a6e_o.jpg'
            />
          </div>
          <div className='mw9 db center pa2 pt2-ns'>
            <img className=' center db  w-100' src='/static/img/DSC_0057.jpg' />
          </div>
          <div className='mw9 db center pa2 pt2-ns'>
            <img className=' center db  w-100' src='/static/img/sofist1.jpg' />
          </div>
          <div className='mw9 db center pa2 pt2-ns'>
            <img
              className=' center db  w-100'
              src='/static/img/sofist5 (2).jpg'
            />
          </div>
          <div className='mw9 db pr6 pa4 pt2-ns'>
            <a className=' center db  measure f5 fw7 dib no-underline black bg-animate hover-bg-black hover-white inline-flex pa3 ba bw1 border-box'>
              Learn More
            </a>
          </div>
          <div className='mw9 db pr6 pa4 pt2-ns'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/DKmhhjw-xhw'
              frameborder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
          </div>
        </div>
        <div className='measure-wide mt3 mb3'>
          <section class='cf w-100 pa2-ns'>
            <span className={`${styles.section}`}>Videos</span>
          </section>
        </div>
        <div className='mw9 w-90 bt center pa4 pt2-ns mh2'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/Yi79yy3-OtM'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen></iframe>
        </div>
      </article>
    </Wrapper>
  </div>
);
export default Home;

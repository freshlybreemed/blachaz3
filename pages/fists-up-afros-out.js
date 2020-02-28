import { styles } from '../constants/styles';
import React from 'react';
import Link from 'next/link';
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
            src='/static/img/FUAO.png'
          />
          <h4 className=' f4-m f4-l mt0 mb4 measure fw6 pv4-l center'>
            When you mix fashion and philanthropy, what do you get? A formula
            that was created by mistake, but gaining it’s way to a household
            brand. Hazel aims to promote UNITY through fashion, art and
            community service.
          </h4>
          <h4 className=' f4-m f4-l mt0 mb2 measure fw6 pv4-l center'>
            1. The <span class={`${styles.link}`}>Afro</span> represents
            freedom, liberation, and an authenic form of growth
          </h4>
          <h4 className=' f4-m f4-l mt0 mb2 measure fw6 pv4-l center'>
            2. The <span class={`${styles.link}`}>Clenched Fist</span> also
            known as the raised fist has been used for centuries by various
            groups and cultures to symbolize unity.
          </h4>
          <h4 className=' f4-m f4-l mt0 mb4 measure fw6 pv4-l center'>
            3. The <span class={`${styles.link}`}>Peace Sign </span> besides
            loves, this is what the word needs
          </h4>

          <div className='mw9 db center pa2 pt2-ns'>
            <img
              className=' center db  w-100'
              src='/static/img/48911613411_525c430a6e_o-2.jpg'
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
          <div className='mw9 db center pa2 pt2-ns'>
            <img
              className=' center db  w-100'
              src='/static/img/il_fullxfull.893805253_g43i.jpg'
            />
          </div>
          <div className='mw9 db pr6 pa4 pt2-ns'>
            <Link href='https://www.etsy.com/shop/Blachaz3?ref=simple-shop-header-name&listing_id=261679659'>
              <a className=' center db  measure f5 fw7 dib no-underline black bg-animate hover-bg-black hover-white inline-flex pa3 ba bw1 border-box'>
                Online Shop{' '}
              </a>
            </Link>
          </div>
        </div>
        <div className='measure-wide mt3 mb3'>
          <section class='cf w-100 pa2-ns'>
            <span className={`${styles.section}`}>Videos</span>
          </section>
        </div>

        <div class='ph4 ph5-l'>
          <div class='aspect-ratio aspect-ratio--16x9 mt5 '>
            <iframe
              src='https://www.youtube.com/embed/uCP-8GQYbRg'
              class='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <h3 class='f5 f4-ns mb0 black-90'>
            Fists Up Afros Out: SoFISTication
          </h3>
          <h3 class='f6 f5 fw4 mt2 black-60'>Original Webseries</h3>
          <div class='aspect-ratio aspect-ratio--16x9 mt5 '>
            <iframe
              src='https://www.youtube.com/embed/DKmhhjw-xhw'
              class='aspect-ratio--object'
              frameborder='0'
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen></iframe>
          </div>
          <h3 class='f5 f4-ns mb0 black-90'>
            <h3 class='f5 f4-ns mb0 black-90'>
              Fists Up Afros Out: Mini Documentary
            </h3>
            <h3 class='f6 f5 fw4 mt2 black-60'>Original Webseries</h3>
          </h3>
        </div>
      </article>
    </Wrapper>
  </div>
);
export default Home;

import { styles } from '../constants/styles';
import React from 'react';
// import SignUpForm from '../components/SignUpForm';
import Wrapper from '../components/Wrapper';

const data = {
  description: 'Photos',
  header: `Blachaz3`,
};

const Home = () => (
  <div>
    <Wrapper data={data}>
      <article className='helvetica pt6'>
        <div className='measure-wide mt3 mb3'>
          <section className='cf w-100 pa2-ns'>
            <span className={`${styles.section}`}>About</span>
          </section>
        </div>
        <main className='cf pa2'>
          <div className='fl w-100 w-50-ns ph2'>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/3-2.jpg' />
            </a>
            <a href='' className='no-underline pv2 grow db'>
              <img
                className='db w-100'
                src='/static/img/83DFD30B-1EBB-452C-94E4-895CC7187A52-3.jpg'
              />
            </a>
            <a href='#' className='no-underline pv2 grow db'>
              <img
                className='db w-100'
                src='/static/img/396FC45A-6B8C-4088-AA46-87D30124CAC3-3.jpg'
              />
            </a>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/DSC00008-3.jpg' />
            </a>
          </div>
          <div className='fl w-50 w-25-ns ph2'>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/IMG_6881-2.jpg' />
            </a>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/DSC_9426-3.jpg' />
            </a>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/_DSC1054-2.jpg' />
            </a>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/_DSC0652-2.jpg' />
            </a>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/DSC00120-4.jpg' />
            </a>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/IMG_6881-2.jpg' />
            </a>
          </div>
          <div className='fl w-50 w-25-ns ph2'>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/_DSC4880-2-2.jpg' />
            </a>
            <a href='' className='pv2 grow db no-underline black'>
              <img
                className='db w-100'
                src='/static/img/AA340444-6440-4536-8401-A48E847AC085-2.jpg'
              />
            </a>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/IMG_6877-2.jpg' />
            </a>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/DSC_9410-2.jpg' />
            </a>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/IMG_4923-2.jpg' />
            </a>
            <a href='' className='pv2 grow db no-underline black'>
              <img className='db w-100' src='/static/img/Hazel-5.jpg' />
            </a>
          </div>
        </main>
      </article>
    </Wrapper>
  </div>
);
export default Home;

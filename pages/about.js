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
    <article class="helvetica pt6">
        <div className='measure-wide mt3 mb3'>
            <section class="cf w-100 pa2-ns">
                <span className={`${styles.section}`}>
                About          
                </span>
            </section>
        </div>
        <main class="cf pa2">
              <div class="fl w-100 w-50-ns ph2">
                  
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/3.jpg"/></a>
                <a href="" class="no-underline pv2 grow db"><img class="db w-100" src="/static/img/83DFD30B-1EBB-452C-94E4-895CC7187A52.JPG"/></a>
                <a href="#" class="no-underline pv2 grow db"><img class="db w-100" src="/static/img/396FC45A-6B8C-4088-AA46-87D30124CAC3.jpg"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/DSC00008.jpg"/></a>
              </div>
              <div class="fl w-50 w-25-ns ph2">
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/IMG_6881.JPG"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/DSC_9426.jpg"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/_DSC1054.JPG"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/_DSC0652.JPG"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/_DSC4787-2.JPG"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/IMG_6881.JPG"/></a>
              </div>
              <div class="fl w-50 w-25-ns ph2">
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/_DSC4880-2.jpg"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/AA340444-6440-4536-8401-A48E847AC085.JPG"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/IMG_6877.jpg"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/DSC_9410.jpg"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/IMG_4923.jpg"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/_DSC4880-2.jpg"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/_DSC4880-2.jpg"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/_DSC4880-2.jpg"/></a>
                <a href="" class="pv2 grow db no-underline black"><img class="db w-100" src="/static/img/_DSC4880-2.jpg"/></a>
              </div>
            </main>
        <div className='measure-wide mt3 mb3'>
            <section class="cf w-100 pa2-ns">
                <span className={`${styles.section}`}>
                Videos         
                </span>
            </section>
               
        </div>
        <div className="mw9 w-90 bt center pa4 pt2-ns mh2">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Yi79yy3-OtM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

    </article>
   </Wrapper>
  </div>
)
export  default Home
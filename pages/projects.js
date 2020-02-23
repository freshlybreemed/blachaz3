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
    <article class="helvetica pt5">
        <div className='measure-wide mt3 mb3'>
            <section class="cf w-100 pa2-ns">
                <span className={`${styles.section}`}>
                Projects          
                </span>
            </section>
        </div>
        <div className="mw9 center pa4 pt2-ns ph7-l">
            <time className="f6 mb2 dib ttu tracked"><img className="w-80 f5 measure" src="/static/img/output-onlinepngtools (1).png" /></time>
            <h4 className="f3 mt0 mb4 fw5 georgia">Aiming to promote UNITY through fashion, art and community Service.</h4>
            {/* <h5 className="f6 ttu tracked black-80">SHOP HERE</h5> */}
            <a href="#0" class="f5 fw7 db no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba bw1 border-box mr4">
            Learn More
            </a>
        </div>
        <div className="mw9 w-90 bt center pa4 pt2-ns mh2">
            <iframe class="w-80"width="560" height="315" src="https://www.youtube.com/embed/Yi79yy3-OtM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

    </article>
   </Wrapper>
  </div>
)
export  default Home
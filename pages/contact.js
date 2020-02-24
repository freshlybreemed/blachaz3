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
                        Let's Chat           
                        </span>
                    </section>
                </div>
                <div class="serif ph2 ph4-m ph5-l pb5">
                <div class="f3 fw7 black lh-title pa2 pb3">
                🚀 <a href="mailto:blachaz3@aol.com" class={`${styles.link}`}>
                 blachaz3@aol.com </a>
                </div>
               <h4 className=" f4-m f4-l mt0 mb4 measure fw6">
                    Use the form below to tell us about your marketing and event programming needs. Our general response time is one business day.
                    </h4>
                    {/* <div class="db dtc-ns v-mid-ns w-100 mw7 w5-ns"> */}
                        <div class="measure ph2  ">
                            <label for="name" class="f6 b db mb2">Name </label>
                            <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100 bg-transparent hover-bg-black hover-white" type="text" aria-describedby="name-desc"/>
                        </div>
                        <div class="measure ph2">
                            <label for="name" class="f6 b db mb2">Email </label>
                            <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100 bg-transparent hover-bg-black hover-white" type="text" aria-describedby="name-desc"/>
                        </div>
                        <div class="measure ph2">
                            <label class="f6 b db mb2">How can Black Haze help you out?</label>
                                <div class="flex items-center mb2">
                                    <input class="mr2" type="checkbox" id="brandidentity" value="brandidentity"/>
                                    <label for="brandidentity" class="lh-copy">Brand Identity</label>
                                </div>
                                <div class="flex items-center mb2">
                                    <input class="mr2" type="checkbox" id="contentcreation" value="contentcreation"/>
                                    <label for="contentcreation" class="lh-copy">Content Creation</label>
                                </div>
                                <div class="flex items-center mb2">
                                    <input class="mr2" type="checkbox" id="socialmedia" value="socialmedia"/>
                                    <label for="socialmedia" class="lh-copy">Social Media</label>
                                </div>
                                <div class="flex items-center mb2">
                                    <input class="mr2" type="checkbox" id="consulting" value="consulting"/>
                                    <label for="consulting" class="lh-copy">Consulting</label>
                                </div>
                                <div class="flex items-center mb2">
                                    <input class="mr2" type="checkbox" id="marketing" value="marketing"/>
                                    <label for="marketing" class="lh-copy">Marketing</label>
                                </div>
                                <div class="flex items-center mb2">
                                    <input class="mr2 " type="checkbox" id="other" value="other"/>
                                    <label for="proxy" class="lh-copy">Other</label>
                                </div>

                        </div>
                        <div class="measure ph2">
                            <label for="name" class="f6 b db mb2 bg-transparent hover-bg-black hover-white">More info</label>
                            <textarea id="comment" name="comment" class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
                        </div>
                        <div class="measure ph2 pt4">
                            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4" type="submit" value="Submit"/>
                        </div>

                    {/* </div> */}
                </div>
            </article>
            
        </Wrapper>
    </div>
    )
export default Home
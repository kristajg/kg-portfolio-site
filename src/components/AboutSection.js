import React from 'react';

import kg from '../assets/images/kg_about.jpg';

export default function AboutSection(){
  return (
    <div className='content-section' id='section-about'>
      <div className='content-header'>About</div>
      <div className='content-body'>
        <div className='content-flex-container'>
          <div className='bio-pic'>
            <img src={kg} className='bio-img' alt='Krista' />
          </div>
          <p className='bio-paragraph'>
            My name is Krista and I&#39;m <b>based in Pittsburgh</b>, so I am familiar with the concept of pierogi both as a food (🥟 delicious) and mascot (💚 Jalapeno Hannah).
            <br/><br/>
            I enjoy writing, drawing, and making video games. Play my latest Pico-8 game <a href='https://www.lexaloffle.com/bbs/?tid=150987' target='_blank' rel="noreferrer">The Hungry Seagull</a>. Will you score high enough to be crowned the fry queen?
            <br/><br/>
            I'm always working on a few projects, and happy to collaborate. Contact me <a href="mailto:krista.goralczyk@gmail.com">here</a>, or find more below.
          </p>
        </div>
      </div>
    </div> 
  )
}

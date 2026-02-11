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
            My name is Krista and I&#39;m <b>based in Pittsburgh</b>, so I am familiar with the concept of pierogi both as a food (🥟 delicious) and as a mascot (💚 Jalapeno Hannah).
            <br/><br/>
            I like writing and making video games. Right now I'm working on a little bit of both. Play my latest Pico-8 game <a href='https://www.lexaloffle.com/bbs/?tid=150987' target='_blank' rel="noreferrer">The Hungry Seagull</a>. Will you score high enough to be crowned the fry queen?
            <br/><br/>
            You can find me reading through the huge stack of books that is constantly replenished and therefore never gets any smaller. With a sundry of interests (anything from making latch hook rugs to weight lifting) I'm always working on a few projects. Find more below.
          </p>
        </div>
      </div>
    </div> 
  )
}

import React from 'react';

import kg from '../assets/images/kg_about.jpg';
import resume from '../assets/images/kristaGoralczyk_resume.pdf';

export default function AboutSection(){
  return (
    <div className='content-section' id='section-about'>
      <div className='content-header'>Hi, I&#39;m Krista</div>
      <div className='content-body'>
        <div className='content-flex-container'>
          <div className='bio-pic'>
            <img src={kg} className='bio-img' alt='Krista' />
          </div>
          <p className='bio-paragraph'>
            Currently I&#39;m <b>based in the DC area</b>, but am <b>originally from Pittsburgh</b>. Yes, I am familiar with pierogi both as a food (delicious) and as a mascot (❤️ Jalapeno Hannah).
            <br/><br/>
            I am a <b>solutions architect &#38; programmer</b> who believes tech products should be performant, secure, pragmatic, and exciting. For inquiries regarding technical consultation, web development, or speaking opportunities <a href="mailto:krista.goralczyk@gmail.com">drop me a line</a>. My resume is available here.
            <br/><br/>
            When I'm not at work, you can find me reading through the huge stack of books that is constantly replenished and therefore never gets any smaller. With a sundry of interests (anything from making latch hook rugs to weight lifting) I'm always working on a few projects. Find more projects and writing below.
            <br/><br/>
            <b>Latest Side Projects:</b><br/>
            • The Hungry Seagull - easy to play Pico-8 video game<br/>
            • maintaining my compost bin - AKA earthworm metropolis<br/>
            • TBD short story - non-dystopian futuristic fiction
          </p>
        </div>
      </div>
    </div> 
  )
}

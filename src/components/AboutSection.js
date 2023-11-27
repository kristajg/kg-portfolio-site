import React from 'react';

import kg from '../assets/images/kg_about.jpg';
import resume from '../assets/images/kristaGoralczyk_resume.pdf';

export default function AboutSection(){
  return (
    <div className='content-section' id='section-about'>
      <div className='content-header'>about</div>
      <div className='content-body'>
        <div className='content-flex-container'>
          <div className='bio-pic'>
            <img src={kg} className='bio-img' alt='Krista' />
          </div>
          <p className='bio-paragraph'>
            Howdy! I am a <b>solutions engineer &#38; programmer</b> with over 12 years of tech industry experience. I'm driven to build new things with creativity and positive intent.<br /><br />
            I know the full gamut of what it takes to conceptualize &#38; build a fullstack product - then take it to market. My preferred code stack is <b>React + Node.js</b>.<br /><br />
            Currently, <b>I am available for hire or freelance work</b>. For inquiries regarding technical consultation, web development, or speaking opportunities <a href="mailto:krista.goralczyk@gmail.com">drop me a line</a>. My resume is <a href={resume} target='_blank' rel="noreferrer">available here</a>.
          </p>
        </div>
      </div>
    </div> 
  )
}

import kg from '../assets/images/kg_about.jpg';
import resume from '../assets/images/kristaGoralczyk_resume2023.pdf';

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
            Howdy! I am a <b>solutions engineer &#38; programmer</b> with over 12 years of tech industry experience. I'm driven to build new things with creativity and positive intent.<br />
            I know the full gamut of what it takes to conceptualize &#38; build a fullstack product - then take it to market. My preferred tech stack is <b>React + Node.js</b>.<br />
            Currently I am a Senior SE at <b>Twilio</b>, specialized in advising on programmable messaging, voice, email, &#38; account security.<br />
            I enjoy writing &#38; speaking about anything tech or comedy related. A two-for-one deal!<br />
            For inquiries regarding freelance consultation, development, or quality puns <a href="mailto:krista.goralczyk@gmail.com">drop me a line</a>. View my resume <a href={resume} target='_blank' rel="noreferrer">here</a>.
          </p>
        </div>
      </div>
    </div> 
  )
}

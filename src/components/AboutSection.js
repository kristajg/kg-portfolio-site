import kg from '../assets/images/kg_about.jpg';

export default function AboutSection(){
  return (
    <div className='content-section' id='section-about'>
      <div className='content-header'>about</div>
      <div className='content-flex-container'>
        <div className='bio-pic'>
          <img src={kg} className='bio-img' alt='Krista' />
        </div>
        <p className='bio-paragraph'>
          Howdy! I am a <b>solutions engineer &#38; programmer</b> with over 12 years of tech industry experience.<br />
          I know the full gamut of what it takes to conceptualize &#38; build a fullstack product - then take it to market.<br />
          Currently I am a Senior SE at <b>Twilio</b>, specialized in advising on programmable messaging, voice, &#38; account security. As for coding, <b>React and Node.js</b> are my jam.<br />
          I enjoy writing &#38; speaking about anything tech (and sometimes comedy). A two-for-one deal!<br />
          For inquiries regarding freelance consultation, development, or quality puns <a href="mailto:krista.goralczyk@gmail.com">drop me a line</a>. View my resume <a href='#'>here</a>.
        </p>
      </div>
    </div> 
  )
}

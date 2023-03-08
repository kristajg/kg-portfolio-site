import kg from '../assets/images/kg_about.jpg';

export default function AboutSection(){
  return (
    <div className='content-section' id='section-about'>
      <div className='content-header'>about</div>
      {/* TODO: make this 2 columns until mobile */}
      <div>
        <img src={kg} className='bio-img' alt='Krista' />
      </div>
      <div>
        Howdy! I am a solutions engineer and programmer based in Denver, Colorado.<br />
        With over 10 years industry experience, I know the full gamut of conceptualizing and building a fullstack product - then taking it to market.<br />
        I also enjoy writing and speaking about anything tech (and sometimes comedy).<br />
        For inquiries regarding freelance consultation, development, or quality puns drop me a line. View my resume here.
      </div>
    </div> 
  )
}

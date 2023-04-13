import womenWhoCode from '../assets/images/speaking/womenWhoCode.jpeg';
import envestnet from '../assets/images/speaking/envestnet.png';
import mortified from '../assets/images/speaking/mortified.png';
import reprise from '../assets/images/speaking/reprise.jpeg';
import oscar from '../assets/images/speaking/oscarTechnology.png';

export default function SpeakingSection(){
  return (
    <div className='content-section alternate-section-background'  id='section-speaking'>
      <div className='content-header'>speaking</div>
      <div className='content-body'>
        <div className='grid-wrapper'>
            <div className='grid-item'>
              <a href='https://www.youtube.com/watch?v=OUraWc_DN1Q' target='_blank' rel="noreferrer">Twilio SIGNAL Presenter 2022</a>
              <div className='youtube-iframe-wrapper'>
                <iframe width="150" height='100' src="https://www.youtube.com/embed/OUraWc_DN1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
              </div>
            </div>
            <div className='grid-item'>
              Presenter for Women who Code ATX
              <img src={womenWhoCode} className='grid-image' alt='Women Who Code logo' />
            </div>
            <div className='grid-item'>
              Panelist for Envestnet's Women Leaders in Finance
              <img src={envestnet} className='grid-image' alt='Envestnet logo' />
            </div>
            <div className='grid-item'>
              <a href='https://www.reprise.com/resources/blog/should-ses-fear-or-embrace-demo-automation' target='_blank' rel="noreferrer">
                Interviewee for Reprise Solutions Engineer Interview Series
              </a>
              <img src={reprise} className='grid-image' alt='reprise logo' />
            </div>
            <div className='grid-item'>
              Oscar Tech Javascript Meetup 2022 - Presented Phaser.io Game Dev Basics
              <img src={oscar} className='grid-image' alt='oscar tech logo' />
            </div>
            <div className='grid-item'>
              Mortified Live Comedy Show - Austin, Texas
              <img src={mortified} className='grid-image' alt='Mortified logo' />
            </div>
          </div>
        </div>
    </div> 
  )
}

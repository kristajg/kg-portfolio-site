import github_icon from '../assets/images/github_icon.svg';
import li_icon from '../assets/images/linkedin_icon.svg';

export default function Footer(){
  return (
    <div className='footer-container'>
      <div>The Socials</div>
      <hr />
      <a href='https://github.com/kristajg' target='_blank'>
        <img src={github_icon} alt='Github Icon' />
      </a>
      <a href='https://www.linkedin.com/in/krista-goralczyk-037a1861/' target='_blank'>
        <img src={li_icon} alt='Linkedin Icon' />
      </a>
    </div> 
  )
}
import github_icon from '../assets/images/github_icon.svg';
import li_icon from '../assets/images/linkedin_icon.svg';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div>Copyright 2023 © Krista Goralczyk. Built with React &#38; Sass, <a href='https://github.com/kristajg/kg-portfolio-site' target='_blank' rel='noreferrer'>view source code here</a>.</div>
      <hr />
      <a title='Github' href='https://github.com/kristajg' target='_blank' rel="noreferrer">
        <img src={github_icon} alt='Github Icon' />
      </a>
      <a title='Linkedin' href='https://www.linkedin.com/in/krista-goralczyk-037a1861/' target='_blank' rel="noreferrer">
        <img src={li_icon} alt='Linkedin Icon' />
      </a>
    </div> 
  );
}

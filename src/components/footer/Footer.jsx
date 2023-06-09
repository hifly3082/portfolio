import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>MAV</h1>
        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>
          <li>
            <a href='#portfolio' className='footer__link'>
              Projects
            </a>
          </li>
          <li>
            <a href='#testimonials' className='footer__link'>
              Testimonials
            </a>
          </li>
        </ul>
        <div className='footer__social'>
          <a
            href='https://www.linkedin.com/in/mark-avvakumov-652900264/'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'>
            <i className='bx bxl-linkedin'></i>
          </a>
          <a
            href='https://www.facebook.com/avv.mark'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'>
            <i className='bx bxl-facebook'></i>
          </a>
          <a
            href='https://github.com/hifly3082'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'>
            <i className='bx bxl-github'></i>
          </a>
        </div>
        <span className='footer__copy'>
          &#169; Mark Avvakumov. All rights reserved
        </span>
      </div>
    </footer>
  );
};
export default Footer;

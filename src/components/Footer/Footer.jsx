import { Link } from 'react-router-dom';
import { FooterWrapper } from './style';

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className='menu'>
        <p>MENU</p>
        <Link className='link' to={'/'}>
          {' '}
          Home{' '}
        </Link>
        <Link className='link' to={'/tools'}>
          {' '}
          Tools{' '}
        </Link>
        <Link className='link' to={'/portfolio'}>
          {' '}
          Portfolio{' '}
        </Link>
        <Link className='link' to={'/contact'}>
          {' '}
          Contato{' '}
        </Link>
      </div>

      <div className='contato'>
        <p>ENTRE EM CONTATO</p>
        <a href='https://www.linkedin.com/in/maikyroger/'>Linkedin</a>
        <a href='github.com/mkyy'>Github</a>
        <a href='https://www.instagram.com/deoklin/'>Instagram</a>
      </div>

      <div className='tel-mail'>
        <div className='i-data'>
          <img src='icons/tel.png' alt='' />
          <h2>(31) 99917-3075</h2>
        </div>
        <div className='i-data'>
          <img src='icons/mail.png' alt='' />
          <h2>maikyrg9@gmail.com</h2>
        </div>
      </div>
    </FooterWrapper>
  );
};

import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Button } from '../../components/Button/Button';

import { ContactPageWrapper, ImgHelmet, DivFoot } from './style';
import { useEffect } from 'react';

export const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contato - mkyy Space';
  });

  return (
    <>
      <Header />
      <ContactPageWrapper>
        <h1>Entre em contato</h1>
        <p>Contrate meus serviços como Freelancer</p>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href='https://www.99freelas.com.br/user/maikyroger'>
            <img style={{ width: '200px', marginRight: '80px' }} src='99.png' alt='' />
          </a>
          <a href='https://www.freelancer.com/u/maikyR0GER'>
            <img style={{ width: '200px' }} src='free.png' alt='' />
          </a>
        </div>

        <ImgHelmet src='helmet.svg' alt='' />
        <div className='btn'>
          <Button href={'maiky-roger.pdf'} img={'/icons/download.webp'} content={'Curriculo'} />
        </div>
      </ContactPageWrapper>
      <DivFoot>
        <img style={{ width: '15%', margin: '0 5%' }} src='MAIKY_logo-removebg.png' alt='' />
        <div style={{ width: '75%', height: '1px', backgroundColor: '#131313' }}></div>
      </DivFoot>
      <Footer />
    </>
  );
};

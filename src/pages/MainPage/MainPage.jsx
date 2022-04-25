import { Footer } from '../../components/Footer/Footer'
import ContactForm from '../../components/ContactForm/ContactForm'
import { Header } from '../../components/Header/Header'
import { Button } from '../../components/Button/Button'
import {
  ContactSection,
  Hexagon,
  Main,
  PageSheet,
  SecondPage,
  Slider,
  StyledImg,
  ThirdPage,
} from './style.js'

const MainPage = () => {
  return (
    <div>
      <Header />

      <PageSheet>
        <Main>
          <div className='text-box'>
            <h1>
              Welcome to <span>mkyy Space</span>
            </h1>
            <p>
              Neste espaço você pode encontrar ferramentas essenciais que um Dev
              precisa, acessando a área "Tools", e também pode ver um pouco mais
              sobre o desenvolvedor por trás disso.
            </p>
            <br />
            <Button
              href={'maiky-roger.pdf'}
              img={'/icons/download.webp'}
              content={'Curriculo'}
            />
            <Button
              href={'/portfolio'}
              img={'/icons/port.png'}
              content={'Portfólio'}
            />
          </div>

          <StyledImg src='astronaut.svg' alt='' />
        </Main>
      </PageSheet>

      <PageSheet>
        <SecondPage>
          <div className='content-box'>
            <img src='icons/smartphone.png' alt='' />
            <h2>Reponsividade</h2>
            <p>
              Total dominio sobre responsividade para páginas mobiles, desktop,
              tablets, etc.
            </p>
          </div>
          <div className='content-box'>
            <img src='icons/network.png' alt='' />
            <h2>Back-end</h2>
            <p>
              Também possuo conhecimento em back-end, e tecnologias como SQL,
              SpringBoot, e Java.
            </p>
          </div>
          <div className='content-box'>
            <img src='icons/calendar.png' alt='' />
            <h2>Disponibilidade</h2>
            <p>Atualmente disponivel para trabalho CLT, PJ, e Freelance.</p>
          </div>
        </SecondPage>
      </PageSheet>

      <PageSheet>
        <ThirdPage>
          <div className='div-hex'>
            <img className='img1' src='icons/git.png' alt='' />

            <img className='img2' src='icons/js.png' alt='' />

            <img className='img3' src='icons/css.png' alt='' />

            <img className='img4' src='icons/html.png' alt='' />

            <img className='img5' src='icons/react.png' alt='' />

            <img className='img6' src='icons/ts.png' alt='' />
            <Hexagon></Hexagon>

            <img className='astro-img' src='astro2.svg' alt='' />
          </div>
          <div className='slider-container'>
            <Slider className='slider'>
              <li>
                <input type='radio' id='slide1' name='slide' defaultChecked />
                <label htmlFor='slide1'></label>
                <p>
                  Cursos com certificado nas maiores empresas de ensino sobre
                  tecnologia do Brasil.
                </p>
              </li>
              <li>
                <input type='radio' id='slide2' name='slide' />
                <label htmlFor='slide2'></label>
                <p>
                  Dominio sobre as tecnologias mais usadas no mercado de
                  trabalho.
                </p>
              </li>
            </Slider>

            <Slider className='slider'>
              <li>
                <input
                  type='radio'
                  id='slide3'
                  name='scndslide'
                  defaultChecked
                />
                <label htmlFor='slide3'></label>
                <p>
                  Na minha jornada preciso estudar de 10 a 12 horas por dia, por
                  isso também é preciso Soft Skills.
                </p>
              </li>
              <li>
                <input type='radio' id='slide4' name='scndslide' />
                <label htmlFor='slide4'></label>
                <p>
                  O que não vai faltar: disciplina, foco, capacidade de aprender
                  novas tecnologias, e mais.
                </p>
              </li>
            </Slider>
          </div>
        </ThirdPage>
      </PageSheet>

      <ContactSection>
        <h1>Deixe sua mensagem</h1>
        <img src='data.svg' alt='' />
        <ContactForm />
      </ContactSection>

      <Footer />
    </div>
  )
}
export default MainPage

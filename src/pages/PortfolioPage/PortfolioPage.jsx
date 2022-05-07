import { useEffect } from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header/Header';
import { PortfolioItem } from '../../components/PortfolioItem/PortfolioItem';

export const PortfolioPage = () => {
  useEffect(() => {
    document.title = 'Portfolio | mkyy Space';
  });

  return (
    <>
      <Header />
      <DivContainer>
        <PortfolioItem
          title='Delivery System'
          desc='Esse projeto é um sistema administrativo para uma empresa que terceiriza serviços de frete para outras empresas, algumas das tecnologias usadas foram React, JS, Vite, styled-components, react-router-dom, conceitos de componentes Stateful, inputs controlados e não-controlados e React Hooks.'
          img='/portfolio/delivery-system.png'
          src='https://delivery-crud-system.vercel.app/'
        />

        <PortfolioItem
          title='FreeGames DB'
          desc='Plataforma de jogos que mostra informações sobre os jogos grátis mais populares da
          atualidade com 350+ diversos games. Possui ferramenta de filtros por data de
          lançamento e plataforma. Tudo feito usando React.js e Javascript, além de bibliotecas
          como react-bootstrap, styled-components e react-router-dom.'
          img='/portfolio/freegdb.png'
          src='https://freegames-db.vercel.app/'
        />

        <PortfolioItem
          title='Netflix Clone'
          desc='Um projeto recriando a interface da Netflix, foi usado jQuery, Bootstrap, HTML, CSS, JS, e uma API chamada TMDB.'
          img='/portfolio/netflix.png'
          src='https://mkyy.github.io/netflix-clone/'
        />

        <PortfolioItem
          title='Pousada Secreta'
          desc='Uma pousada em angra dos reis, que possui vários modelos de quartos, e varias áreas de lazer.'
          img='portfolio/pousada-screenshot.png'
          src='https://mkyy.github.io/pousada_secreta/'
        />
        <PortfolioItem
          title='Mimos da Patty'
          desc='Site para uma empresa que oferece serviços e produtos de papelaria em geral, criando utilizando React.js com a linguagem TypeScript.
                Neste site utilizei a biblioteca fullpage.js que é praticamente um framework para landing pages, além disso utilizei styled-components para para estilizar todo o site, e também usei Vite para criar e npm para gerenciar o projeto.'
          img='portfolio/mimos-da-patty.png'
          src='https://mimos-da-patty.vercel.app/'
        />
        <PortfolioItem
          title='Clinica Medica Life'
          desc='Site para a CM-life, uma clinica médica que oferece vários serviços, além de uma grande variedade de profissionais especializados.'
          img='portfolio/cm-life.png'
          src='https://mkyy.github.io/clinica_medica_life/index.html'
        />
      </DivContainer>
    </>
  );
};

const DivContainer = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  justify-content: center;
`;
